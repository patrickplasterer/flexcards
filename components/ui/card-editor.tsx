"use client";

import { updateCard } from "@/lib/actions";
import { GripHorizontalIcon, SaveIcon } from "lucide-react";
import { useState } from "react";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "./button";

export function CardEditor({ activeCard, isDisabled }) {
  const router =  useRouter();
  
  const [frontEditor] = useState(() => withReact(createEditor()));


  const frontInitialValue = [
  {
      type: "paragraph",
      children: [{ text: activeCard?.front ? activeCard.front : 'Front text' }],
  },
  ];



frontEditor.children = frontInitialValue;

const [backEditor] = useState(() => withReact(createEditor()));
const backInitialValue = [
  {
    type: "paragraph",
    children: [{ text: activeCard?.back ? activeCard.back : 'Back text' }],
  },
];
  backEditor.children = backInitialValue;


function handleSave() {
    const [front, back] = document.querySelectorAll('[data-slate-string');
    const frontText = front.innerHTML;
    const backText = back.innerHTML;
    const cardId = activeCard.id
    updateCard(frontText, backText, cardId);
}

function handleReset() {
  router.refresh();
}



  return (
    <div className={cn("flex flex-col flex-grow basis-1/2", {"pointer-events-none opacity-60": isDisabled === true})}>
      <div className="flex p-2 gap-2 items-center justify-end h-[3vh] flex-none overflow-hidden">
        <Button onClick={handleReset}>
          Reset
        </Button>
        <Button onClick={handleSave}>
          Save
        </Button>
      </div>
      <div className="bg-border h-[1px]"></div>
      <div id="front" className="flex flex-col items-center justify-center p-4 basis-1/2">
        <div className="flex flex-col items-center justify-center">
          <Slate
            editor={frontEditor}
            initialValue={frontInitialValue}
          >
            <Editable readOnly={isDisabled}/>
          </Slate>
        </div>
      </div>
      <div className="flex justify-center items-center bg-border h-[1px]">
        <div className="flex z-10 rounded-lg opacity-50 p-4 hover:opacity-100 cursor-row-resize">
          <GripHorizontalIcon className="w-4 h-4" />
        </div>
      </div>
      <div
        id="back"
        className="flex flex-col items-center justify-center p-4 basis-1/2"
      >
        <div className="flex flex-col items-center justify-center">
          <Slate editor={backEditor} initialValue={backInitialValue}>
            <Editable readOnly={isDisabled}/>
          </Slate>
        </div>
      </div>
    </div>
  );
}
