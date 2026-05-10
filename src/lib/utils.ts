import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ROW_DELAY = 30;
export const SCRAMBLE_SPEED = 24;
export const SCRAMBLED_LETTER_COUNT = 5;

export const getAnimationDuration = (text: string) => {
  return Math.min((text.length - SCRAMBLED_LETTER_COUNT) * SCRAMBLE_SPEED, 100);
};