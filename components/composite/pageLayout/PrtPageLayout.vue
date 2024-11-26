<template>
  <div
      class="prt-page-layout"
      :class="{
      'with-both-sidebars': showLeftSidebar && showRightSidebar,
      'with-left-sidebar': showLeftSidebar && !showRightSidebar,
      'with-right-sidebar': !showLeftSidebar && showRightSidebar,
      'no-sidebars': !showLeftSidebar && !showRightSidebar
    }"
  >
    <header v-if="showHeader" class="layout-header">
      <slot name="header" />
    </header>

    <aside v-if="showLeftSidebar" class="layout-sidebar layout-sidebar-left">
      <slot name="left-sidebar" />
    </aside>

    <main class="layout-main">
      <slot />
    </main>

    <aside v-if="showRightSidebar" class="layout-sidebar layout-sidebar-right">
      <slot name="right-sidebar" />
    </aside>

    <footer v-if="showFooter" class="layout-footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  showHeader?: boolean
  showFooter?: boolean
  showLeftSidebar?: boolean
  showRightSidebar?: boolean
}>(), {
  showHeader: true,
  showFooter: true,
  showLeftSidebar: false,
  showRightSidebar: false
})
</script>

<style scoped>
.prt-page-layout {
  display: grid;
  min-height: 100vh;
  width: 100%;
}

/* Default layout with both sidebars */
.with-both-sidebars {
  grid-template-areas:
    "header header header"
    "sidebar-left main sidebar-right"
    "footer footer footer";
  grid-template-columns: 250px 1fr 250px;
}

/* Layout with only left sidebar */
.with-left-sidebar {
  grid-template-areas:
    "header header"
    "sidebar-left main"
    "footer footer";
  grid-template-columns: 250px 1fr;
}

/* Layout with only right sidebar */
.with-right-sidebar {
  grid-template-areas:
    "header header"
    "main sidebar-right"
    "footer footer";
  grid-template-columns: 1fr 250px;
}

/* Layout with no sidebars */
.no-sidebars {
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-columns: 1fr;
}

/* Common grid-template-rows for all layouts */
.prt-page-layout {
  grid-template-rows: auto 1fr auto;
}

.layout-sidebar {
  @apply bg-neutral-900/20;
}

.layout-header {
  grid-area: header;
}

.layout-sidebar-left {
  grid-area: sidebar-left;
}

.layout-main {
  grid-area: main;

}

.layout-sidebar-right {
  grid-area: sidebar-right;
}

.layout-footer {
  grid-area: footer;
}
</style>