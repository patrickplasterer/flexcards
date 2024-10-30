
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
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"
 
export function DeleteDeckDialog({handleClick, children}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md bg-background border-2 rounded-[1rem]" aria-describedby="delete deck warning">
        <DialogHeader>
          <DialogTitle className={'text-foreground mt-4'}>Are you sure you want to delete this deck?</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center w-full text-foreground">
          <div className="mb-4">This action cannot be undone.</div>
          <DialogClose><Button variant='default' size='lg' onClick={handleClick}>Delete</Button></DialogClose>
        </div>
        <DialogFooter className="sm:justify-start">
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
