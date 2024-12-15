"use client"

import { StarIcon} from "lucide-react"
import { Input } from "../input";
import { Label } from "../label";
import { Button } from "../button";
import { addReview } from "@/lib/actions";
import { useState, useActionState } from "react";
import { cn } from "@/lib/utils";
import { ReviewFormState } from "@/lib/actions";

export function ReviewForm({ deckId, userId }: {deckId: number, userId: string}) {
    const initialState = {success: undefined, errors: {}, message: null} as ReviewFormState;
    const [formState, handleFormSubmit, isPending] = useActionState(addReview, initialState);

    const [rating, setRating] = useState(0);
    const [stars, setStars] = useState(0);

    function handleStarClick(value: number) {
        setStars(value);
        setRating(value);
    }

    return (
        <div className="flex relative items-center justify-center">
            {isPending && <div className="flex items-center justify-center w-full h-full absolute z-1000">Loading...</div>}
            <div className={cn("flex flex-col h-30 rounded-xl border-2 w-full py-2 px-3", {'opacity-40 pointer-events-none': isPending == true})}>
                {formState?.success == true ? <div className="flex flex-col text-sm">Review added!</div> : null}
                {formState?.success == false ? <div className="flex flex-col text-sm mb-2">Something went wrong.</div> : null}
                {/* <div className="flex font-bold text-md mb-2">Patrick Plasterer</div> */}
                <form className='flex flex-col gap-4' id='add-review' action={handleFormSubmit}>
                    {/* Hidden Inputs */}
                    <Input defaultValue={userId} className="hidden" name='user'/>
                    <Input defaultValue={deckId.toString()} className="hidden" name='deck'/>
                    {/* Star Rating Input */}
                    <div className="flex flex-col gap-1">
                        <div className="flex mt-1" onMouseOut={() => setStars(0)} >
                            <StarIcon fill={cn("", {"white": (stars >= 1 || rating >= 1)})} className="h-4 w-4" onMouseOver={() => setStars(1)} onClick={() => {handleStarClick(1)}}/>
                            <StarIcon fill={cn("", {"white": (stars >= 2 || rating >= 2)})} className="h-4 w-4" onMouseOver={() => setStars(2)} onClick={() => {handleStarClick(2)}}/>
                            <StarIcon fill={cn("", {"white": (stars >= 3 || rating >= 3)})} className="h-4 w-4" onMouseOver={() => setStars(3)} onClick={() => {handleStarClick(3)}}/>
                            <StarIcon fill={cn("", {"white": (stars >= 4 || rating >= 4)})} className="h-4 w-4" onMouseOver={() => setStars(4)} onClick={() => {handleStarClick(4)}}/>
                            <StarIcon fill={cn("", {"white": (stars >= 5 || rating >= 5)})} className="h-4 w-4" onMouseOver={() => setStars(5)} onClick={() => {handleStarClick(5)}}/>
                        </div>
                        <Input value={rating} readOnly type='number' className="hidden" name='rating'/>
                        {formState?.errors?.rating && formState.errors.rating.map((error: string) => (
                        <p className="text-sm text-highlighter" key={error}>{error}</p>
                            ))}
                    </div>
            
                    {/* Body Input */}
                    <div className="flex flex-col gap-1">
                        <Label className="hidden">Body</Label>
                        <Input
                            type="text"
                            placeholder="Add a comment..."
                            name='body'
                        />
                        {formState?.errors?.body && formState.errors.body.map((error: string) => (
                        <p className="text-sm text-highlighter" key={error}>{error}</p>
                         ))}
                    </div>
                    <Button type='submit' form='add-review' variant='default'>Save</Button>
                </form>
            </div>
        </div>
    )
}