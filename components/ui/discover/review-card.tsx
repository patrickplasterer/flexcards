"use client"

import { StarIcon, StarHalfIcon } from "lucide-react"

export function ReviewCard({ review }: {review: object}) {

    return (
        <div className="flex flex-col h-30 rounded-xl border-2 w-full py-2 px-3 hover:bg-accent hover:text-accent-foreground">
            <h1 className="font-bold text-sm">{review.title}</h1>
            <div className="flex mt-1 mb-1">
                <StarIcon fill="white" className="h-2.5 w-2.5"/>
                <StarIcon fill="white" className="h-2.5 w-2.5"/>
                <StarIcon fill="white" className="h-2.5 w-2.5"/>
                <StarIcon fill="white" className="h-2.5 w-2.5"/>
                <StarIcon className="h-2.5 w-2.5"/>
            </div>
            <p className="mt-1 text-xs overflow-hidden line-clamp-2">{review.body}</p>
        </div>
    )
}