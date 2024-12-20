"use client"

import { StarIcon} from "lucide-react"
import { Input } from "../input";
import { Label } from "../label";
import { Button } from "../button";
import { addReview } from "@/lib/actions";
import { useState, useActionState, useRef, startTransition, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ReviewFormState } from "@/lib/actions";
import { useForm } from 'react-hook-form';

export function ReviewForm({ deckId, userId }: {deckId: number, userId: string}) {
    const initialState = {success: undefined, errors: {}, message: null} as ReviewFormState;
    const [actionState, handleActionSubmit, isPending] = useActionState(addReview, initialState);
    const [showSuccess, setShowSuccess] = useState(false);

    const [rating, setRating] = useState(0);
    const [stars, setStars] = useState(0);

    function handleStarClick(value: number) {
        setStars(value);
        setRating(value);
    }

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            user: userId,
            deck: deckId,
            rating: 0,
            body: "",
            ...(actionState.fields ?? {}),
        },
        delayError: 1000
    });

    useEffect(() => {
        if (actionState.success == true) {
            reset();
            setRating(0);
            setShowSuccess(true);
            setTimeout(() => {setShowSuccess(false)}, 1000);
        }
      }, [actionState])

    useEffect(() => {
        if(rating > 0) {
            setValue('rating', rating, {shouldDirty: true, shouldValidate: true})
        }
    }, [rating])

    const formRef = useRef<HTMLFormElement>(null);

    return (
        <>
            {(actionState?.success == true && showSuccess == true) && <div className="flex items-center justify-center rounded-xl p-8 absolute z-1000 bg-accent ring-2 bottom-4 right-4">Review Added!</div>}
            <div className="flex relative items-center justify-center">
                {isPending && <div className="flex items-center justify-center w-full h-full absolute z-1000 animate-pulse">Loading...</div>}
                <div className={cn("flex flex-col h-30 rounded-xl border-2 w-full py-2 px-3", {'opacity-40 pointer-events-none': isPending == true})}>
                    {actionState?.success == false ? <div className="flex flex-col text-sm mb-2">Something went wrong.</div> : null}
                    {/* <div className="flex font-bold text-md mb-2">Patrick Plasterer</div> */}
                    <form
                        className='flex flex-col gap-4'
                        id='add-review'
                        ref={formRef}
                        action={handleActionSubmit}
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(() => {
                                startTransition(() => {
                                    handleActionSubmit(new FormData(formRef.current!));
                                })
                            })(e);
                        }}
                    >
                        {/* Hidden Inputs */}
                        <Input defaultValue={userId} className="hidden" {...register('user')}/>
                        <Input defaultValue={deckId.toString()} className="hidden" {...register('deck')}/>
                        {/* Star Rating Input */}
                        <div className="flex flex-col gap-1">
                            <div className="flex mt-1" onMouseOut={() => setStars(0)} >
                                <StarIcon fill={cn("", {"white": (stars >= 1 || rating >= 1)})} className="h-4 w-4" onMouseOver={() => setStars(1)} onClick={() => {handleStarClick(1)}}/>
                                <StarIcon fill={cn("", {"white": (stars >= 2 || rating >= 2)})} className="h-4 w-4" onMouseOver={() => setStars(2)} onClick={() => {handleStarClick(2)}}/>
                                <StarIcon fill={cn("", {"white": (stars >= 3 || rating >= 3)})} className="h-4 w-4" onMouseOver={() => setStars(3)} onClick={() => {handleStarClick(3)}}/>
                                <StarIcon fill={cn("", {"white": (stars >= 4 || rating >= 4)})} className="h-4 w-4" onMouseOver={() => setStars(4)} onClick={() => {handleStarClick(4)}}/>
                                <StarIcon fill={cn("", {"white": (stars >= 5 || rating >= 5)})} className="h-4 w-4" onMouseOver={() => setStars(5)} onClick={() => {handleStarClick(5)}}/>
                            </div>


                            <Input value={rating} readOnly type='number' className="hidden" {...register('rating', {required: true, min: 1})}/>

                            {errors?.rating?.type == 'min' && <p>CLIENT requires a rating.</p>}
                            {actionState?.errors?.rating && actionState.errors.rating.map((error: string) => (
                            <p className="text-sm text-highlighter" key={error}>{error}</p>
                                ))}
                        </div>
            
                        {/* Body Input */}
                        <div className="flex flex-col gap-1">
                            <Label className="hidden">Body</Label>
                            <Input
                                type="text"
                                placeholder="Add a comment..."
                                {...register('body', {required: 'A comment is required.', minLength: 5})}
                                />
                            {errors?.body?.type == 'required' && <p>CLIENT requires a comment.</p>}
                            {errors?.body?.type == 'minLength' && <p>CLIENT requires five characters.</p>}
                            {actionState?.errors?.body && actionState.errors.body.map((error: string) => (
                            <p className="text-sm text-highlighter" key={error}>{error}</p>
                             ))}
                        </div>
                        <Button type='submit' form='add-review' variant='default'>Save</Button>
                    </form>
                </div>
            </div>
        </>
    )
}