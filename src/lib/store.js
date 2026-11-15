import { create } from "zustand";

export const COLORS = [
  { name: "Orchid", hex: "#ff5c8a" },
  { name: "Glacier", hex: "#6ee7f9" },
  { name: "Solar", hex: "#ffc857" },
  { name: "Moss", hex: "#8bd17c" },
  { name: "Bone", hex: "#f3f0ff" },
];
export const FINISHES = ["matte", "glossy", "metal"];

export const useStore = create((set) => ({
  color: COLORS[0].hex,
  colorName: COLORS[0].name,
  finish: "glossy",
  setColor: (color, colorName) => set({ color, colorName }),
  setFinish: (finish) => set({ finish }),
}));
