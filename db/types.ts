
export interface Deck {
    id: number,
    name: string,
    isPublic: boolean,
    description: string | null,
    tags: string
}

export interface Card {
    id: number,
    front: string,
    back: string,
    deck: number
}

export interface Review {
    id: number,
    user: string,
    deck: string,
    body: string,
    rating: number
}