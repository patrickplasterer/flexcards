"use client"

import { ReviewCard } from "./review-card";
import * as React from 'react'
import { Review } from "@/db/schema";


export function ReviewList({ reviews }: {reviews: Array<Review>}) {
    
    return (
        <div className="flex flex-col flex-grow overflow-auto">
            <div className="flex flex-col overflow-hidden">
                <div className="flex flex-col flex-grow gap-2 overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent pr-1">
                    {reviews.map((review) => {
                        return (
                            <ReviewCard key={review.id} review={review} />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}