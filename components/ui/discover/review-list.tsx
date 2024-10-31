"use client"

import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { ReviewCard } from "./review-card";


export function ReviewList({ reviews }: {reviews: Array<object>}) {
    
    const router = useRouter();
    const searchParams = useSearchParams();
    const deckId = searchParams.get('deck');

    return (
        <div className="flex flex-col flex-grow overflow-hidden">
            <div className="flex h-[3vh] flex-none items-center justify-center">
                <div className='flex w-full items-center justify-end gap-1 text-sm p-2'>
                </div>
            </div>
            <div className="flex flex-col p-2 overflow-hidden">
                <div className="flex flex-col flex-grow p-2 gap-2 overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent">
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