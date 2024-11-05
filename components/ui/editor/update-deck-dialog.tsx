
 import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"
import * as React from 'react';
 
export function UpdateDeckDialog({handleClick, activeDeck, children}) {

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md bg-background border-2 rounded-[1rem]" aria-describedby="Add deck form">
        <DialogHeader>
          <DialogTitle className={'text-foreground'}>Update Deck</DialogTitle>
        </DialogHeader>
        <div className="flex items-center w-full text-foreground">
          <form id='update_deck' action={handleClick} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-1">
              <Label htmlFor="title" className="">
                Title:
              </Label>
              <Input id="title" name='title' defaultValue={activeDeck.name} className='rounded-[0.5rem] bg-background text-foreground'/>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="description" className="">
                Description:
              </Label>
              <Input id="description" name='description' defaultValue={activeDeck.description} className='rounded-[0.5rem]'/>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="tags" className="">
                Tags:
              </Label>
              <Input id="tags" name='tags' defaultValue={activeDeck.tags} className='rounded-[0.5rem]'/>
            </div>
            <div className="flex justify-end">
              <DialogClose><Button variant='default' size='lg' type='submit' form='update_deck'>Save</Button></DialogClose>
            </div>
          </form>
        </div>
        <DialogFooter className="sm:justify-start">
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
