import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Alternative version with more precise month/year calculations
 * Uses actual calendar months instead of 30-day approximations
 * 
 * @param date - Date object, timestamp (number), or date string
 * @returns Relative time string (e.g., "2 days ago", "3 months ago")
 * 
 * @example
 * getRelativeTimeStringPrecise(new Date('2023-01-01')) // Accurate month calculation
 */
export function getRelativeTimeString(
  date: Date | number | string
): string {
  try {
    // Convert input to Date object
    const targetDate = date instanceof Date ? date : new Date(date);
    
    // Validate date
    if (isNaN(targetDate.getTime())) {
      return 'Invalid date';
    }

    const now = new Date();
    const diffInMs = now.getTime() - targetDate.getTime();
    const diffInSeconds = Math.floor(diffInMs / 1000);

    // Handle future dates or very recent
    if (diffInSeconds < 10) {
      return 'just now';
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    // Less than a minute
    if (diffInMinutes < 1) {
      return `${diffInSeconds} second${diffInSeconds === 1 ? '' : 's'} ago`;
    }

    // Less than an hour
    if (diffInHours < 1) {
      return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
    }

    // Less than a day
    if (diffInDays < 1) {
      return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
    }

    // Less than a week
    if (diffInDays < 7) {
      return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
    }

    // Less than a month
    if (diffInDays < 30) {
      const weeks = Math.floor(diffInDays / 7);
      return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
    }

    // Calculate months precisely
    const yearsDiff = now.getFullYear() - targetDate.getFullYear();
    const monthsDiff = now.getMonth() - targetDate.getMonth();
    const totalMonths = yearsDiff * 12 + monthsDiff;

    // Less than a year
    if (totalMonths < 12) {
      return `${totalMonths} month${totalMonths === 1 ? '' : 's'} ago`;
    }

    // Years
    const years = Math.floor(totalMonths / 12);
    return `${years} year${years === 1 ? '' : 's'} ago`;
  } catch (error) {
    console.error('Error formatting relative time:', error);
    return 'Unknown time';
  }
}
