import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Review } from "@/db/schema"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateAverageRating(reviews: Array<Review>) {
  let rating = 0
  reviews.map(
      (review: Review) => {
          rating = rating + review.rating
      }
  )
  const averageRating = Math.round((rating / reviews.length) * 10) / 10
  return(averageRating)
};

export function openCloseDataState(id: string) {
  const element = document.getElementById(id);
  if (element?.dataset.state == 'open') {
    element.dataset.state = 'closed';
    return
  }
  if (element?.dataset.state == 'closed') {
    element.dataset.state = 'open';
    return
  }
}