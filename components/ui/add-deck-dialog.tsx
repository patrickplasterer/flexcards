
 import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
 
export function AddDeckDialog({handleClick}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Deck</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background" aria-describedby="Add deck form">
        <DialogHeader>
          <DialogTitle className={'text-foreground'}>Add a Deck</DialogTitle>
        </DialogHeader>
        <div className="flex items-center w-full text-foreground">
          <form id='add_deck' action={handleClick} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col">
              <Label htmlFor="title" className="">
                Title:
              </Label>
              <Input id="title" name='title' className='rounded-[0.5rem] bg-background text-foreground'/>
            </div>
            <div className="flex flex-col">
              <Label htmlFor="description" className="mb-1">
                Description:
              </Label>
              <Input id="description" name='description' className='rounded-[0.5rem]'/>
            </div>
            <div className="flex flex-col">
              <Label htmlFor="tags" className="mb-1">
                Tags:
              </Label>
              <Input id="tags" name='tags' className='rounded-[0.5rem]'/>
            </div>
            <div className="flex justify-end">
              <DialogClose><Button type='submit' form='add_deck'>Save</Button></DialogClose>
            </div>
          </form>
        </div>
        <DialogFooter className="sm:justify-start">
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
