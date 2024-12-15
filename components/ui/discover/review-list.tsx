"use client"

import { ReviewCard } from "./review-card";
import * as React from 'react'
import { Review } from "@/db/schema";


export function ReviewList({ reviews, userId }: {reviews: Array<Review>, userId: string}) {
    
    return (
        <div className="flex flex-col flex-grow overflow-auto">
            <div className="flex flex-col overflow-hidden">
                <div className="flex flex-col flex-grow gap-2 overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent pr-1">
                    {reviews.length == 0 ? <p>This deck has no reviews yet.</p> : reviews.map((review) => {
                        return (
                            <ReviewCard key={review.id} review={review} userId={userId} />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}