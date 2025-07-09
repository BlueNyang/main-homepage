<script setup lang="ts">
import SidebarToggler from './SidebarToggler.vue';
import NavMenu from './NavMenu.vue';
import ThemeToggler from './ThemeToggler.vue';
</script>

<template>
  <nav
    id="navbar"
    class="fixed flex items-center justify-between w-full z-1000"
  >
    <div
      class="flex items-center justify-between w-4/5 h-16 mx-auto bg-white shadow-lg dark:bg-gray-800 transition-colors duration-500"
    >
      <!-- Left Side: Offcanvas Button and logo -->
      <div class="flex items-center gap-x-4 ml-4">
        <SidebarToggler />
        <div class="flex lg:flex-1 py-5">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="text-2xl font-[Pacifico] font-bold">BlueNyang</span>
          </a>
        </div>
      </div>

      <!-- Center: Menu -->
      <NavMenu />

      <!-- Right Side: ThemeToggler -->
      <ThemeToggler />
    </div>
  </nav>
</template>
