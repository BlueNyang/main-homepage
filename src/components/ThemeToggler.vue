<script setup lang="ts">
import { useDarkMode, type DarkMode } from '@/stores/useDarkMode';

const { toggleDarkMode }: DarkMode = useDarkMode();
</script>

<template>
  <button
    @click="toggleDarkMode"
    id="theme-toggle-btn"
    class="relative flex h-9 w-9 items-center justify-center rounded-full p-2 mr-10 transition-colors duration-500 hover:bg-gray-200 dark:hover:bg-gray-500"
    aria-label="Toggle dark mode"
  >
    <!-- Light-mode Icon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      class="absolute text-black transition-all duration-500 ease-in-out -rotate-30 dark:-rotate-120 dark:scale-0 dark:opacity-0"
    >
      <path
        fill="currentColor"
        d="M14.5 21q-1.858 0-3.5-.71q-1.642-.711-2.86-1.93T6.21 15.5T5.5 12q0-1.864.71-3.503q.711-1.64 1.93-2.857T11 3.71Q12.642 3 14.5 3q.812 0 1.558.139q.746.138 1.442.442q-1.833 1.498-2.916 3.674Q13.5 9.43 13.5 12t1.084 4.745T17.5 20.42q-.696.304-1.442.443Q15.312 21 14.5 21"
      ></path>
    </svg>
    <!-- DarkMode Icon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      class="absolute text-white transition-all duration-500 scale-0 ease-in-out opacity-0 dark:-rotate-90 dark:scale-100 dark:opacity-100"
    >
      <path
        fill="currentColor"
        d="M12 16q-1.671 0-2.835-1.164Q8 13.67 8 12t1.165-2.835T12 8t2.836 1.165T16 12t-1.164 2.836T12 16m-7-3.5H1.5v-1H5zm17.5 0H19v-1h3.5zM11.5 5V1.5h1V5zm0 17.5V19h1v3.5zM6.746 7.404l-2.16-2.098l.695-.745l2.111 2.135zM18.72 19.439l-2.117-2.141l.652-.702l2.16 2.098zM16.596 6.745l2.098-2.16l.745.695l-2.135 2.111zM4.562 18.72l2.14-2.117l.664.652l-2.08 2.179z"
      ></path>
    </svg>
    <span class="sr-only">Toggle dark mode</span>
  </button>
</template>
