<template>
  <div class="min-h-screen bg-neutral-900 p-8">
    <div class="mx-auto">
      <!-- Base Components -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-white mb-4">Base Components</h2>
        <div class="grid grid-flow-col grid-rows-8 gap-3 w-[1120px]">
          <template v-for="component in baseComponents" :key="component.name">
            <NuxtLink
                :to="getComponentPath('base', component.path)"
                class="bg-neutral-800/50 hover:bg-neutral-700/50 rounded-lg px-4 py-3 flex items-center justify-between transition-colors min-w-[200px]"
            >
              <span class="text-white">{{ component.name }}</span>
              <span class="text-white/70">→</span>
            </NuxtLink>
          </template>
        </div>
      </div>
      <!-- Composite Components -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-white mb-4">Composite Components</h2>
        <div class="grid grid-flow-col grid-rows-8 gap-3 w-[1120px]">
          <template v-for="component in compositeComponents" :key="component.name">
            <NuxtLink
                :to="getComponentPath('composite', component.path)"
                class="bg-neutral-800/50 hover:bg-neutral-700/50 rounded-lg px-4 py-3 flex items-center justify-between transition-colors min-w-[200px]"
            >
              <span class="text-white">{{ component.name }}</span>
              <span class="text-white/70">→</span>
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Component {
  name: string;
  path: string;
}

const getComponentPath = (type: 'base' | 'composite', path: string): string => `/${type}/${path}`;

const baseComponents: Component[] = [
  'avatar',
  'badge',
  'breadcrumb',
  'btn',
  'chatbubble',
  'checkbox',
  'chip',
  "excerpt",
  "flag",
  "gototop",
  "icon",
  "inputnumber",
  "inputtext",
  "inputtextarea",
  "list",
  "loader",
  "loadingbar",
  "notice",
  "overlay",
  "progress",
  "radio",
  "rating",
  "select",
  "skeleton",
  "slider",
  "toast",
  "toggle",
  "tooltip",
  "sticky",
  "listingparams",
  "typography"


].map((name): Component => ({
  name: name.charAt(0).toUpperCase() + name.slice(1),
  path: name.toLowerCase(),
}));

const compositeComponents: Component[] = [
  "autocomplete",
  "btngroup",
  "uploader",
  "collapsible",
  "combobox",
  "confirmpopup",
  "drawer",
  "elevation",
  "filterbar",
  "formfield",
  "formgroup",
  "indexbar",
  "infinitescroll",
  "megamenu",
  "tabs",
  "lazyimg",
  "lightbox",
  "splashscreen",
  "tagchipsinput",
  "langselect",
  "result",
  "countdown",
  "card",
  "banner",
  "pagination",
  "scrollbar",
  "steps",
  "priceinput",
  "productcard",
  "newsletterbar",
  "layoutflex",
  "layoutgrid",
  "listing",
  "gallery",
  "modeselector",
  "floatingwidget",
  "timeline",
  "sitefooter",
  "siteheader",
  "appsidebar",
  "pagelayout",
  "appheader",
  "appfooter",
  "formcheckout",
  "carousel"

].map((name): Component => ({
  name: name.charAt(0).toUpperCase() + name.slice(1),
  path: name.toLowerCase(),
}));
</script>