import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cancelBtnStyles = {
  backgroundColor: "transparent",
  border: "none",
  padding: "0",
  cursor: "pointer",
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
