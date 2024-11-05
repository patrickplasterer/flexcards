
export interface Deck {
    id: number,
    name: string,
    isPublic: boolean,
    description: string | null
}

export interface Card {
    id: number,
    front: string,
    back: string,
    deck: number | null
}