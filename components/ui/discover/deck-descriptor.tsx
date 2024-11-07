import { StarIcon } from "lucide-react"
import { ReviewForm } from "./review-form"
import { ReviewList } from "./review-list"
import * as React from 'react'
import { Deck, Review } from "@/db/types"


export function DeckDescriptor({ activeDeck, reviews, userId }: {activeDeck: Deck, reviews: Array<Review>, userId: string}) {
    return (
        <div className="flex flex-col grow rounded-xl w-full p-6 overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent">
            <div className="flex flex-col">
                <h1 className="font-bold text-2xl mb-6">{activeDeck?.name ?? ''}</h1>
                <div className="flex my-3 gap-4 items-center">
                    <div className="flex gap-1">
                        <StarIcon fill="white" className="h-5 w-5"/>
                        <StarIcon fill="white" className="h-5 w-5"/>
                        <StarIcon fill="white" className="h-5 w-5"/>
                        <StarIcon fill="white" className="h-5 w-5"/>
                        <StarIcon className="h-5 w-5"/>
                    </div>
                    <div className="flex text-xs mt-[1px]">{`(${reviews.length} review${reviews.length !== 1 ? 's' : ''})`}</div>
                </div>
                <div className="flex flex-col my-6">
                    <h3 className="font-light text-sm">Created by: Hank Hill</h3>
                    <h3 className="font-light text-sm">Created on: January 1st, 1985</h3>
                </div>
                <div className="flex flex-col mb-6">
                    <h3 className="font-light text-sm">Number of cards: 62</h3>
                    <h3 className="font-light text-sm">Tags: #computerscience, #HTML, #coding</h3>
                </div>
                <p className="mt-1 text-md overflow-hidden mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, numquam quidem? Reprehenderit commodi, ullam id, aliquid perferendis minima tempore soluta cupiditate quis velit incidunt odit temporibus fugiat libero dolorum, voluptas omnis fuga vero reiciendis. Totam assumenda dignissimos veritatis, soluta itaque rerum voluptatibus sint facere sapiente debitis quis a harum nihil omnis iste, recusandae voluptate nam nisi repudiandae corrupti. Facilis cumque omnis, doloremque laboriosam ex expedita, nostrum quaerat sint ducimus reprehenderit aut pariatur fuga dolor, nam quibusdam reiciendis. Placeat voluptas, magnam optio harum numquam, maxime exercitationem dicta dolorem aliquid vero saepe nesciunt odit ipsum incidunt obcaecati fugit unde, perspiciatis voluptate omnis!</p>
                {/* <Button variant='default' size='lg'>Add to My Decks</Button> */}
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="mt-4 mb-4 text-xl font-bold">Add a review:</h2>
                <ReviewForm deckId={activeDeck.id} userId={userId}/>
                <h2 className="mt-4 mb-4 text-xl font-bold">Reviews:</h2>
                <ReviewList reviews={reviews}/>
            </div>
        </div>
    )
}