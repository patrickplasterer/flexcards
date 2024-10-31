"use client"

import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { ReviewCard } from "./review-card";


export function ReviewList({ reviews }: {reviews: Array<object>}) {
    
    const router = useRouter();
    const searchParams = useSearchParams();
    const deckId = searchParams.get('deck');

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