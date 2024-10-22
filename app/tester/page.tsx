
import { DeckList } from "@/components/ui/editor/deck-list"

export default function Page() {

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='flex flex-col items-center justify-center w-[50vh] h-[50vh] rounded-xl'>
                <DeckList userID={2}/>
            </div>
        </div>
    )
}

