<script setup lang="ts">
import MenuList from '@/data/Menu.json';

type Item = {
  name: string;
  path: string;
  isBlank: boolean;
};

const menuItems = MenuList as Item[];
</script>

<template>
  <ul
    class="flex items-center space-x-4 hidden lg:flex font-[Sour_Gummy] text-lg"
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
</template>
