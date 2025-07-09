<script setup lang="ts">
import { useSidebar, type SidebarToggle } from '@/stores/useSidebar';

const { toggleSidebar }: SidebarToggle = useSidebar();
</script>

<template>
  <button
    @click="toggleSidebar"
    type="button"
    id="sidebarToggler"
    class="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-gray-700 dark:text-gray-300 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
  >
    <span class="sr-only">Toggle Sidebar</span>
    <svg
      class="size-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      ></path>
    </svg>
  </button>
</template>
