"use client"

import { StarIcon} from "lucide-react"
import { Input } from "../input";
import { Label } from "../label";
import { Button } from "../button";
import { addReview } from "@/lib/actions";
import * as React from 'react'

export function ReviewForm({ deckId, userId }: {deckId: number, userId: string}) {

    function handleSubmit(formData: FormData) {
        formData.append('user', userId);
        formData.append('deck', deckId.toString());
        addReview(formData)
    }

    return (
        <div className="flex flex-col h-30 rounded-xl border-2 w-full py-2 px-3">
            {/* <div className="flex font-bold text-md mb-2">Patrick Plasterer</div> */}
            <form className='flex flex-col gap-4' id='add-review' action={handleSubmit}>
                <div className="flex mt-1 mb-1">
                    <StarIcon fill="white" className="h-4 w-4"/>
                    <StarIcon fill="white" className="h-4 w-4"/>
                    <StarIcon fill="white" className="h-4 w-4"/>
                    <StarIcon fill="white" className="h-4 w-4"/>
                    <StarIcon className="h-4 w-4"/>
                </div>
                <Label className="hidden"></Label>
                <Input name='body' type="text" />
                <Button type='submit' form='add-review' variant='default'>Save</Button>
            </form>
        </div>
    )
}