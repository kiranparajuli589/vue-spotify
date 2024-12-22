<script setup>
import { defineProps, computed } from 'vue'
import {getDataGridClasses} from "@/helpers/util.js";

const props = defineProps({
  columns: {
    type: Array,
    required: true
  },
  rows: {
    type: Array,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  classes: {
    type: Object,
    default: () => ({})
  },
  minWidth: {
    type: String,
    default: "800px"
  },
  loadingRowCount: {
    type: Number,
    default: 10
  }
})

const tableGridStyle = computed(() => ({
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: props.columns
    .map((col) => {
      const grid = col.grid
      if (typeof grid === "number") {
        return `${grid}fr`
      }
      if (typeof grid === "string") {
        return grid
      }
      return "1fr"
    })
    .join(" "),
}))

const getCellStyle = (col) => ({
  minWidth: col.minWidth || 0,
  maxWidth: col.maxWidth || "unset",
  textAlign: col.align || "left",
  display: "flex",
  justifyContent:
    col.align === "right" ? "flex-end" :
      col.align === "center" ? "center" :
        "flex-start",
});

const computedClasses = computed(() => getDataGridClasses(props.classes))

const isEmpty = computed(() => !props.rows?.length)
const justifyContentStyle = (col) => col.align === 'right' ? 'flex-end' : col.align === 'center' ? 'center' : 'flex-start'
</script>
<template>
  <div
    :class="computedClasses.root"
  >
    <!-- Body -->
    <div
      :class="computedClasses.header"
      :style="{
        minWidth,
      }"
    >
      <div
        :class="computedClasses.row"
        :style="tableGridStyle"
      >
        <div
          v-for="(col, index) in columns"
          :key="index"
          :class="computedClasses.cell"
          :style="getCellStyle(col)"
        >
          {{ col.headerName }}
        </div>
      </div>
    </div>

    <!-- Body -->
    <div
      :class="computedClasses.body"
      :style="{
        minWidth,
      }"
    >
      <template
        v-if="isLoading && isEmpty"
      >
        <div
          v-for="n in loadingRowCount"
          :key="n"
          :class="computedClasses.row"
          :style="tableGridStyle"
        >
          <div
            v-for="(col, colIndex) in columns"
            :key="colIndex"
            :class="computedClasses.loadingCell"
            :style="getCellStyle(col)"
          >
            <div class="pulse" />
          </div>
        </div>
      </template>

      <template
        v-if="!isLoading && isEmpty"
      >
        <div :class="computedClasses.empty">
          <div class="d-flex flex-column ga-2 justify-center align-center">
            <img
              src="@/assets/images/man.png"
              alt="Empty data"
            >
          </div>
          <div>
            <h3 class="text-xl">
              No data was found.
            </h3>
            <p>Please try again later or contact support.</p>
          </div>
        </div>
      </template>

      <template
        v-if="!isEmpty && !isLoading && rows.length"
      >
        <div
          v-for="(rowData, rowIndex) in rows"
          :key="rowIndex"
          :class="computedClasses.row"
          :style="tableGridStyle"
        >
          <div
            v-for="(col, colIndex) in columns"
            :key="colIndex"
            :class="computedClasses.cell"
            :style="getCellStyle(col)"
          >
            <template
              v-if="col.component"
            >
              <component
                :is="col.component"
                :row-data="rowData"
                :row-index="rowIndex"
              />
            </template>
            <template v-else>
              <template v-if="typeof col.computedValue === 'function'">
                <div
                  :style="{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: justifyContentStyle(col)
                  }"
                >
                  <span
                    class="truncate grow"
                    :title="rowData[col.field]"
                  >
                    {{ col.computedValue(rowData, rowIndex) }}
                  </span>
                </div>
              </template>
              <template
                v-else
              >
                <div
                  :style="{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: justifyContentStyle(col)
                  }"
                >
                  <span
                    class="truncate grow"
                    :title="rowData[col.field]"
                  >
                    {{ rowData[col.field] }}
                  </span>
                </div>
              </template>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
