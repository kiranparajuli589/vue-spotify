<template>
  <article
    :ref="article"
    @contextmenu.prevent="openMenu"
    @click="menu = false"
  >
    <slot name="default" />

    <v-menu
      v-model="menu"
      :style="{
        top: `${menuPosition.y}px`,
        left: `${menuPosition.x}px`
      }"
      class="custom-menu elevation-8"
    >
      <VCard
        id="artist-menu"
      >
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
              v-text="item.title"
            />
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
import { ref, onMounted } from "vue";
const article=ref(null);

defineProps({
  menuItems: {
    type: Array,
    default: () => [],
  },
})

const menu = ref(false);
const menuPosition = ref({ x: 0, y: 0 });

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
  appMain.addEventListener("scroll", () => {
    menu.value = false;
  });
  window.addEventListener("resize", () => {
    menu.value = false;
  });
});

</script>
<style lang="scss" scoped>
article {
  position: relative;

  img.main {
    aspect-ratio: 1;
    margin-bottom: .5rem;
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

.custom-menu {
  position: absolute;
  z-index: 1000;
}

.submenu {
  position: absolute;
  z-index: 2000;
}
</style>
