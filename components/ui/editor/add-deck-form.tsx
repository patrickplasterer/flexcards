import { Label } from "../label"
import { Input } from "../input"
import { Button } from "../button";
import { createDeck } from "@/lib/actions";
import { openCloseDataState } from "@/lib/utils";

export function AddDeckForm({ userId, id }: {userId: string, id: string}) {

    function handleCreate(formData: FormData) {
        formData.append("userId", userId.toString());
        createDeck(formData);
        openCloseDataState(id);
    }

    return (
        <div className="flex items-center w-full text-foreground">
          <form id='add_deck' action={handleCreate} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-1">
              <Label htmlFor="title" className="">
                Title:
              </Label>
              <Input id="title" name='title' className='rounded-[0.5rem] bg-background text-foreground'/>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="description" className="">
                Description:
              </Label>
              <Input id="description" name='description' className='rounded-[0.5rem]'/>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="tags" className="">
                Tags:
              </Label>
              <Input id="tags" name='tags' className='rounded-[0.5rem]'/>
            </div>
            <div className="flex justify-end">
              <Button variant='default' size='lg' type='submit' form='add_deck'>Save</Button>
            </div>
          </form>
        </div>
    )
}