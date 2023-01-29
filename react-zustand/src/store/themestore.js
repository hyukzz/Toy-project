import create from 'zustand';
export const useThemeStore = create((set) => ({
  dark: false,
  toggleDarkMode: () => set(state => ({dark: !state.dark}))
}));