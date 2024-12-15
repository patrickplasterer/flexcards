"use client";

import { GripHorizontalIcon } from "lucide-react";
import { useState } from "react";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import * as React from 'react';
import { Card } from "@/db/schema";

export function CardEditor({ card }: {card: Card}) {
  
  const [frontEditor] = useState(() => withReact(createEditor()));
  const frontInitialValue = [
  {
      type: "paragraph",
      children: [{ text: card?.front ? card.front : 'Front text' }],
  },
  ];

frontEditor.children = frontInitialValue;


const [backEditor] = useState(() => withReact(createEditor()));
const backInitialValue = [
  {
    type: "paragraph",
    children: [{ text: card?.back ? card.back : 'Back text' }],
  },
];
  backEditor.children = backInitialValue;






  return (
      <div className="flex flex-col h-full">
      <div id="front" className="flex flex-col items-center justify-center p-4 basis-1/2">
        <div className="flex flex-col items-center justify-center">
          <Slate
            editor={frontEditor}
            initialValue={frontInitialValue}
          >
            <Editable/>
          </Slate>
        </div>
      </div>
      <div className="flex justify-center items-center bg-border h-[1px]">
        <div className="flex z-10 rounded-lg opacity-50 p-4 hover:opacity-100 cursor-row-resize">
          <GripHorizontalIcon className="w-4 h-4" />
        </div>
      </div>
      <div id="back" className="flex flex-col items-center justify-center p-4 basis-1/2">
        <div className="flex flex-col items-center justify-center">
          <Slate editor={backEditor} initialValue={backInitialValue}>
            <Editable/>
          </Slate>
        </div>
      </div>
    </div>
  );
}
