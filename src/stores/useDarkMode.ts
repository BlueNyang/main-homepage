import { ref, watchEffect, type Ref } from 'vue';

export interface DarkMode {
  isDarkMode: Ref<boolean>;
  toggleDarkMode: () => void;
}

export function useDarkMode(): DarkMode {
  const isDarkMode: Ref<boolean> = ref(false);

  function toggleDarkMode(): void {
    isDarkMode.value = !isDarkMode.value;
  }

  const storedDarkMode: string | null = localStorage.getItem('darkMode');

  if (storedDarkMode !== null) {
    isDarkMode.value = storedDarkMode === 'true';
  } else {
    isDarkMode.value = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
  }

  watchEffect((): void => {
    document.documentElement.classList.toggle('dark', isDarkMode.value);
    localStorage.setItem('darkMode', isDarkMode.value.toString());
  });

  return {
    isDarkMode,
    toggleDarkMode,
  };
}
