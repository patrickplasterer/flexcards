"use client"

import { Review } from "@/db/schema";
import { StarIcon } from "lucide-react"
import { Button } from "../button";
import { deleteReview } from "@/lib/actions";

export function ReviewCard({ review, userId }: {review: Review, userId}) {

    function handleDelete() {
        deleteReview(review.id);
    }
    
    const rating = review.rating

    const stars = [] as Array<React.ReactNode>;
    for (let i = 1; i <= rating; i++) {
            stars.push(<StarIcon fill="white" key={i} className="h-2.5 w-2.5"/>)
    }
    for (let i = 1; i <= (5 - rating); i++) {
            stars.push(<StarIcon key={-i} className="h-2.5 w-2.5"/>)
    }

    return (
        <div className="flex flex-col rounded-xl border-2 w-full py-3 px-4">
            {/* <h1 className="font-bold text-sm">{review.user}</h1> */}
            <div className="flex mt-2 mb-2">
                {stars}
            </div>
            <p className="mt-1 text-xs overflow-hidden line-clamp-2 mb-2">{review.body}</p>
            {userId == review.user ? <Button onClick={handleDelete} variant='default'>Delete Review</Button> : null}
        </div>
    )
}