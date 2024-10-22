import { createCard } from "@/lib/actions";

export function Form({ deck }: {deck: number}) {

    return (
      <form action={createCard} className="flex flex-col p-6 w-[50vw] h-[50vh] rounded-xl bg-zinc-400 items-center justify-center">
        <div className="flex flex-col w-64 gap-6">
            <input type="text" name="front" id="front" />
            <input type="text" name="back" id="back" />
            <input type="hidden" name="deck" value={deck} />
            <button type="submit" className="bg-accent rounded-xl text-accent-foreground">Submit</button>
        </div>
      </form>
    );
  }
  

  export default function Page() {

    return (
        <div className="flex flex-col h-screen w-full items-center justify-center text-black">
            <Form deck={1}/>
        </div>
    );

  };