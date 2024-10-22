import { Editor } from '@/components/ui/editor/editor'

export default function Page() {
    const decks = getDecks(userID);

    return (
            <Editor />
    )
}