<template>
  <div class="min-h-screen bg-neutral-900">
    <div class="mx-auto">
      <div class="mb-8 p-8">
        <h1 class="mt-4 text-3xl font-bold text-white">App Sidebar</h1>
      </div>

      <div class="space-y-8">
        <!-- Square Version -->
        <section class="bg-neutral-800">
          <h2 class="border-b border-neutral-700 p-6 text-xl font-semibold text-white">Square Style</h2>
          <div class="flex min-h-[750px]">
            <PrtAppSideBar size="wide">
              <template #header>
                <div class="px-5 py-6">
                  <div class="mb-6 flex items-center gap-3">
                    <div class="flex h-11 w-11 items-center justify-center bg-neutral-600">
                      <PrtIcon size="base" iconComponent="home" class="text-white" />
                    </div>
                    <div>
                      <span class="block text-xl font-semibold text-white">MyApp</span>
                      <span class="text-sm text-neutral-400">Square Version</span>
                    </div>
                  </div>
                </div>
              </template>

              <div class="px-3 py-2">
                <div class="mb-4 px-4">
                  <h3 class="text-xs font-medium uppercase tracking-wider text-neutral-400">Main Menu</h3>
                </div>

                <div class="space-y-1">
                  <a
                      v-for="(item, idx) in navItems"
                      :key="idx"
                      href="#"
                      :class="navigationItemVariants({
                      active: item.active || false,
                      rounded: false
                    })"
                  >
                    <div class="flex h-10 w-10 items-center justify-center bg-neutral-600/10 transition-colors group-hover:bg-neutral-600/20">
                      <PrtIcon :iconComponent="item.icon" size="base" />
                    </div>
                    <div class="min-w-0 flex-col">
                      <span class="truncate">{{ item.label }}</span>
                      <span v-if="item.subtitle" class="ml-2 text-sm text-neutral-400 group-hover:text-neutral-300">
                        {{ item.subtitle }}
                      </span>
                    </div>
                    <div v-if="item.badge" class="ml-auto">
                      <span class="bg-neutral-600/20 px-2 py-1 text-xs text-white">
                        {{ item.badge }}
                      </span>
                    </div>
                  </a>
                </div>

                <div class="mb-4 mt-8 px-4">
                  <h3 class="text-xs font-medium uppercase tracking-wider text-neutral-400">Settings</h3>
                </div>

                <div class="space-y-1">
                  <a
                      v-for="(item, idx) in settingsItems"
                      :key="idx"
                      href="#"
                      :class="navigationItemVariants({
                      active: item.active || false,
                      rounded: false
                    })"
                  >
                    <div class="flex h-10 w-10 items-center justify-center bg-neutral-600/10 transition-colors group-hover:bg-neutral-600/20">
                      <PrtIcon :iconComponent="item.icon" size="base" />
                    </div>
                    <span class="truncate">{{ item.label }}</span>
                  </a>
                </div>
              </div>

              <template #footer>
                <div class="mt-auto border-t border-neutral-700 p-4">
                  <div class="group flex cursor-pointer items-center gap-3 p-3 transition-colors hover:bg-neutral-600/10">
                    <div class="flex h-10 w-10 items-center justify-center bg-neutral-600/20">
                      <PrtIcon iconComponent="user" size="base" />
                    </div>
                    <div class="min-w-0 flex-1">
                      <div class="text-sm font-medium text-white">Lorem Ipsum</div>
                      <div class="truncate text-xs text-neutral-400">lorem@example.com</div>
                    </div>
                    <PrtIcon iconComponent="settings" size="base" class="text-neutral-400" />
                  </div>
                </div>
              </template>
            </PrtAppSideBar>

            <div class="flex-1 flex items-center justify-center p-8 text-neutral-400">
              Main Content Area
            </div>
          </div>
        </section>

        <!-- Rounded Version -->
        <section class="bg-neutral-800">
          <h2 class="border-b border-neutral-700 p-6 text-xl font-semibold text-white">Rounded Style</h2>
          <div class="flex min-h-[750px]">
            <PrtAppSideBar size="wide">
              <template #header>
                <div class="px-5 py-6">
                  <div class="mb-6 flex items-center gap-3">
                    <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-600 shadow-lg">
                      <PrtIcon size="base" iconComponent="home" class="text-white" />
                    </div>
                    <div>
                      <span class="block text-xl font-semibold text-white">MyApp</span>
                      <span class="text-sm text-neutral-400">Rounded Version</span>
                    </div>
                  </div>
                </div>
              </template>

              <div class="px-3 py-2">
                <div class="mb-4 px-4">
                  <h3 class="text-xs font-medium uppercase tracking-wider text-neutral-400">Main Menu</h3>
                </div>

                <div class="space-y-1">
                  <a
                      v-for="(item, idx) in navItems"
                      :key="idx"
                      href="#"
                      :class="navigationItemVariants({
                      active: item.active || false,
                      rounded: true
                    })"
                  >
                    <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-600/10 transition-colors group-hover:bg-neutral-600/20">
                      <PrtIcon :iconComponent="item.icon" size="base" />
                    </div>
                    <div class="min-w-0 flex-col">
                      <span class="truncate">{{ item.label }}</span>
                      <span v-if="item.subtitle" class="text-sm text-neutral-400 group-hover:text-neutral-300">
                        {{ item.subtitle }}
                      </span>
                    </div>
                    <div v-if="item.badge" class="ml-auto">
                      <span class="rounded-full bg-neutral-600/20 px-2 py-1 text-xs text-white">
                        {{ item.badge }}
                      </span>
                    </div>
                  </a>
                </div>

                <div class="mb-4 mt-8 px-4">
                  <h3 class="text-xs font-medium uppercase tracking-wider text-neutral-400">Settings</h3>
                </div>

                <div class="space-y-1">
                  <a
                      v-for="(item, idx) in settingsItems"
                      :key="idx"
                      href="#"
                      :class="navigationItemVariants({
                      active: item.active || false,
                      rounded: true
                    })"
                  >
                    <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-600/10 transition-colors group-hover:bg-neutral-600/20">
                      <PrtIcon :iconComponent="item.icon" size="base" />
                    </div>
                    <span class="truncate">{{ item.label }}</span>
                  </a>
                </div>
              </div>

              <template #footer>
                <div class="mt-auto p-4">
                  <div class="group flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors hover:bg-neutral-600/10">
                    <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-600/20">
                      <PrtIcon iconComponent="user" size="base" />
                    </div>
                    <div class="min-w-0 flex-1">
                      <div class="text-sm font-medium text-white">Lorem Ipsum</div>
                      <div class="truncate text-xs text-neutral-400">lorem@example.com</div>
                    </div>
                    <PrtIcon iconComponent="settings" size="base" class="text-neutral-400" />
                  </div>
                </div>
              </template>
            </PrtAppSideBar>

            <div class="flex-1 flex items-center justify-center p-8 text-neutral-400">
              Main Content Area
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navigationItemVariants } from '../../../components/composite/appSideBar'

interface NavItem {
  label: string
  icon: string
  active?: boolean
  subtitle?: string
  badge?: string | number
}

const navItems: NavItem[] = [
  {
    label: 'Overview',
    icon: 'home',
    active: true,
    subtitle: 'Main dashboard',
  },
  {
    label: 'Analytics',
    icon: 'edit',
    subtitle: 'View details',
    badge: 'New'
  },
  {
    label: 'Reports',
    icon: 'info',
    subtitle: 'View details'
  },
  {
    label: 'Messages',
    icon: 'send',
    badge: '5'
  }
]

const settingsItems: Array<{ label: string; icon: string; active?: boolean }> = [
  { label: 'Settings', icon: 'settings', active: false },
  { label: 'Help & Support', icon: 'info', active: false }
]
</script>