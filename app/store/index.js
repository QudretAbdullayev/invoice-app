import { create } from 'zustand'

let lightDarkMode = true;
const storedValue = localStorage.getItem("lightDark");
if (storedValue === null || storedValue === true) {
  localStorage.setItem("lightDark", true)
}else{
  lightDarkMode = false;
}

export const useLightDarkStore = create((set) => ({
  lightDark: lightDarkMode,
  isLightDark: () => set((state) => ({ lightDark: state.lightDark ? false : true }))
}))