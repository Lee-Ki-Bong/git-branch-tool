import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines `clsx` for conditional class management and `twMerge` for TailwindCSS class merging.
 */
export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(...inputs))
}
