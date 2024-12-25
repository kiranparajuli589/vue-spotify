<template>
  <article
    ref="articleCard"
    :class="uniqueArticleClass"
    @contextmenu.prevent="openMenu"
    @click="() => {
      if (to) {
        router.push(to);
      }
      menu = false;
    }"
  >
    <slot name="default" />

    <v-menu
      ref="menuRef"
      v-model="menu"
      :style="menuPositionStyle()"
      :class="{
        'custom-menu': true,
        'custom-menu--right': menuRightEdge,
        [uniqueMenuClass]: true,
      }"
      close-on-back
    >
      <VCard elevation="12">
        <VList>
          <VListItem
            v-for="item in menuItems"
            :key="item.title"
            :style="{
              borderTop: item.bottom
                ? '1px solid rgba(255,255,255,0.2)'
                : 'none'
            }"
            :disabled="item.disabled"
            @click="(e) => handleClick(e, item)"
          >
            <template #prepend>
              <VImg
                v-if="item.icon"
                :src="item.icon"
                width="24"
                height="24"
              />
            </template>
            <VListItemTitle
              class="ml-2"
            >
              {{ item.title }}
            </VListItemTitle>
            <v-menu
              v-if="item.children"
              activator="parent"
              submenu
            >
              <VList>
                <VListItem
                  v-for="child in item.children"
                  :key="child.title"
                  @click="(e) => handleClick(e, child)"
                >
                  <template #prepend>
                    <VImg
                      v-if="child.icon"
                      :src="child.icon"
                      width="24"
                      height="24"
                    />
                  </template>
                  <VListItemTitle v-if="!child.component" class="ml-2">
                    {{ child.title }}
                  </VListItemTitle>
                  <component
                    :is="child.component"
                    v-if="child.component"
                    :menu-items="child.children"
                    :item="child"
                  />
                </VListItem>
              </VList>
            </v-menu>

            <template
              v-if="item.endIcon"
              #append
            >
              <VImg
                :src="item.endIcon"
                width="24"
                height="24"
              />
            </template>
          </VListItem>
        </VList>
      </VCard>
    </v-menu>
  </article>
</template>
<script setup>
import {ref, onMounted, useTemplateRef, onBeforeUnmount} from "vue";
import {useRouter} from "vue-router";
const articleCard = useTemplateRef("articleCard");

defineProps({
  menuItems: {
    type: Array,
    default: () => [],
  },
  to: {
    type: [String, null],
    default: null
  }
})

const router = useRouter();
const menu = ref(false);
const menuRef = useTemplateRef("menuRef");
const menuPosition = ref({ x: 0, y: 0 });
const menuRightEdge = ref(false);
const uniqueMenuClass = `menu-${Math.random().toString(36).substring(7)}`;
const uniqueArticleClass = `article-${Math.random().toString(36).substring(7)}`;

const menuPositionStyle = () => {
  if (articleCard.value && menuRef.value) {
    const rect = articleCard.value?.getBoundingClientRect();
    const menuHeight = menuRef.value?.$el?.offsetHeight || 315; // Default height fallback
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const rightEdge = rect.right + 280; // Adjust 200px as the estimated menu width
    const bottomEdge = menuPosition.value.y + menuHeight;

    let style = {};

    // Check if menu overflows the bottom of the screen
    if (bottomEdge > windowHeight) {
      style.top = `${menuPosition.value.y - menuHeight}px`; // Place menu above
    } else {
      style.top = `${menuPosition.value.y}px`;
    }

    // Check if menu overflows the right side of the screen
    if (rightEdge > windowWidth) {
      style.right = `${windowWidth - menuPosition.value.x}px`;
      menuRightEdge.value = true;
    } else {
      style.left = `${menuPosition.value.x}px`;
      menuRightEdge.value = false;
    }

    return style;
  }

  return {};
};

const openMenu = (event) => {
  menu.value = true;
  menuPosition.value = { x: event.clientX, y: event.clientY };
};

const handleClick = (e, item) => {
  e.stopPropagation();
  if (item.children) {
    item.open = !item.open;
  } else {
    menu.value = false;
  }
};

onMounted(() => {
  const appMain = document.querySelector(".app_main");
  document.addEventListener("click", handleOutsideClick);
  document.addEventListener("contextmenu", handleOutsideRightClick);
  appMain.addEventListener("scroll", () => {
    menu.value = false;
  });
  window.addEventListener("resize", () => {
    menu.value = false;
  });
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleOutsideClick);
  document.removeEventListener("contextmenu", handleOutsideRightClick);
});
const handleOutsideClick = (event) => {
  const menuEl = menuRef.value?.$el || menuRef.value;
  if (menuEl && !menuEl.contains(event.target)) {
    menu.value = false;
  }
};
const handleOutsideRightClick = (event) => {
  if (menu.value) {
    if (!event.target.closest(`.${uniqueArticleClass}`)) {
      menu.value = false;
    }
  }
};

</script>
<style lang="scss" scoped>
article {
  position: relative;
  user-select: none;
  cursor: pointer;
  img.main {
    aspect-ratio: 1;
    margin-bottom: .5rem;
    user-select: none;
    object-fit: cover;
  }

  h3 {
    color: white;
    font-size: 18px;
    text-align: start;
  }
  p {
    color: white;
    font-size: 14px;
    text-align: start;
  }
}
</style>
<style lang="scss">
.custom-menu {
  &--right {
    .v-overlay__content {
      right: 0;
    }
  }
}
</style>
