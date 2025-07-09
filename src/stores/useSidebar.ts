import { ref, readonly, type Ref } from 'vue';

export interface SidebarToggle {
  isOpen: Ref<boolean>;
  toggleSidebar: () => void;
}

// Singleton pattern
const isSidebarOpen: Ref<boolean> = ref(false);

export function useSidebar(): SidebarToggle {
  function toggleSidebar(): void {
    isSidebarOpen.value = !isSidebarOpen.value;
  }

  return {
    isOpen: readonly(isSidebarOpen),
    toggleSidebar,
  };
}
