import { StarIcon } from "lucide-react"

export function DeckDescriptor() {
    return (
        <div className="flex flex-col grow rounded-xl border-2 w-full p-6">
            <h1 className="font-bold text-2xl mb-6">Card</h1>
            <div className="flex my-3 gap-4 items-center">
                <div className="flex gap-1">
                    <StarIcon fill="white" className="h-5 w-5"/>
                    <StarIcon fill="white" className="h-5 w-5"/>
                    <StarIcon fill="white" className="h-5 w-5"/>
                    <StarIcon fill="white" className="h-5 w-5"/>
                    <StarIcon className="h-5 w-5"/>
                </div>
                <div className="flex text-xs mt-[1px]">(21 reviews)</div>
            </div>
            <div className="flex flex-col my-6">
                <h3 className="font-light text-sm">Created by: Hank Hill</h3>
                <h3 className="font-light text-sm">Created on: January 1st, 1985</h3>
            </div>
            <div className="flex flex-col mb-6">
                <h3 className="font-light text-sm">Number of cards: 62</h3>
                <h3 className="font-light text-sm">Tags: #computerscience, #HTML, #coding</h3>
            </div>
            <p className="mt-1 text-md overflow-hidden line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, numquam quidem? Reprehenderit commodi, ullam id, aliquid perferendis minima tempore soluta cupiditate quis velit incidunt odit temporibus fugiat libero dolorum, voluptas omnis fuga vero reiciendis. Totam assumenda dignissimos veritatis, soluta itaque rerum voluptatibus sint facere sapiente debitis quis a harum nihil omnis iste, recusandae voluptate nam nisi repudiandae corrupti. Facilis cumque omnis, doloremque laboriosam ex expedita, nostrum quaerat sint ducimus reprehenderit aut pariatur fuga dolor, nam quibusdam reiciendis. Placeat voluptas, magnam optio harum numquam, maxime exercitationem dicta dolorem aliquid vero saepe nesciunt odit ipsum incidunt obcaecati fugit unde, perspiciatis voluptate omnis!</p>
        </div>
    )
}