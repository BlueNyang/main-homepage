<script setup lang="ts">
import MenuList from '@/data/Menu.json';
import { useSidebar, type SidebarToggle } from '@/stores/useSidebar';

type Item = {
  name: string;
  path: string;
  isBlank: boolean;
};

const { isOpen, toggleSidebar }: SidebarToggle = useSidebar();

const menuItems = MenuList as Item[];
</script>

<template>
  <div
    class="fixed bg-black/70 inset-0 z-1100"
    :class="{ hidden: !isOpen }"
    @click="toggleSidebar"
  ></div>
  <div
    class="lg:hidden fixed inset-y-0 left-0 z-1100 w-full h-screen overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform transform duration-300 ease-in-out -translate-x-full dark:bg-gray-800 dark:ring-gray-700"
    :class="{ 'translate-x-0': isOpen, '-translate-x-full': !isOpen }"
    role="dialog"
    aria-modal="true"
  >
    <div class="flex items-center justify-between">
      <h5 class="text-bold font-[Jua] text-2xl">Menu</h5>
      <button
        type="button"
        id="sidebar-close-btn"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        @click="toggleSidebar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 fill-gray-600 dark:fill-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
    <div class="flex flex-grow">
      <ul
        class="flex w-full items-center space-y-4 flex-col font-[Sour_Gummy] text-lg"
      >
        <li v-for="menuItem in menuItems" :key="menuItem.name">
          <a
            :href="menuItem.path"
            :target="menuItem.isBlank ? '_blank' : '_self'"
            class="block px-4 py-5 text-gray-700 dark:text-gray-300 hover:text-sky-600 font-medium dark:hover:text-sky-400 transition-colors duration-300"
          >
            {{ menuItem.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
