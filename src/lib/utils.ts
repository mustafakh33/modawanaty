import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const postsPerPage: number = 4;

export const revalidateTime: number = 30; // 30 seconds to revalidate