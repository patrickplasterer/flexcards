import { ReviewForm } from "./review-form"
import { ReviewList } from "./review-list"
import * as React from 'react'
import { Deck, Review } from "@/db/schema"
import { getCards } from "@/lib/data"
import { DeckDescriptorButtons } from "./deck-descriptor-buttons"
import { ReviewStars } from "./review-stars"
import { calculateAverageRating } from "@/lib/utils";


export async function DeckDescriptor({ activeDeck, reviews, userId, followedDecks }: {activeDeck: Deck, reviews: Array<Review>, userId: string, followedDecks: Array<Deck>}) {

    const cards = await getCards(activeDeck.id)
    const isFollowing = Boolean(followedDecks.find((deck) => activeDeck.id === deck.id))
    const isMine = userId === activeDeck.user
    const averageRating = calculateAverageRating(reviews);

    return (
        <div className="flex flex-col grow rounded-xl w-full p-6 overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent">
            <div className="flex flex-col">
                <h1 className="font-bold text-2xl mb-6">{activeDeck?.name ?? ''}</h1>
                <div className="flex my-3 gap-4 items-center">
                    <ReviewStars averageRating={averageRating}/>
                    <p>{averageRating ? averageRating : null}</p>
                    <div className="flex text-xs mt-[1px]">{`(${reviews.length} review${reviews.length !== 1 ? 's' : ''})`}</div>
                </div>
                <div className="flex flex-col my-6">
                    <h3 className="font-light text-sm">Created by: Hank Hill</h3>
                    <h3 className="font-light text-sm">Created on: January 1st, 1985</h3>
                </div>
                <div className="flex flex-col mb-6">
                    <h3 className="font-light text-sm">{`Number of cards: ${cards.length}`}</h3>
                    <h3 className="font-light text-sm">Tags: {activeDeck.tags}</h3>
                </div>
                <p className="mt-1 text-md overflow-hidden mb-4">{activeDeck.description ? activeDeck.description : 'This deck has no description.'}</p>
                {isMine ? null : <DeckDescriptorButtons deck={activeDeck} userId={userId} isFollowing={isFollowing} />}
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="mt-4 mb-4 text-xl font-bold">Add a review:</h2>
                <ReviewForm deckId={activeDeck.id} userId={userId}/>
                <h2 className="mt-4 mb-4 text-xl font-bold">Reviews:</h2>
                <ReviewList reviews={reviews} userId={userId}/>
            </div>
        </div>
    )
}