import { StarIcon } from "lucide-react";
import { HalfStarIcon } from "@/components/svg/half-star";

export function ReviewStars({ averageRating }: {averageRating: number}) {

    if(!averageRating) {averageRating = 0};
    const roundedRating = (Math.floor(averageRating / 0.5) * 0.5)


    const stars = [] as Array<React.ReactNode>;
    const halfStars = (roundedRating - Math.floor(roundedRating)) / 0.5

    for (let i = 1; i <= roundedRating; i++) {
            stars.push(<StarIcon fill="white" className="h-4 w-4" key={i}/>)
    }

    for (let i = 1; i <= halfStars; i++) {
            stars.push(<HalfStarIcon className="h-4 w-4" key={i+5}/>)
    }

    for (let i = 1; i <= (5 - (Math.floor(roundedRating) + halfStars)); i++) {
            stars.push(<StarIcon className="h-4 w-4" key={i+10}/>)
    }

    return (
        <div className="flex gap-1">
            {stars}
        </div>
    )
}