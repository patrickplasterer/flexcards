"use client"

import React, { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'


export function TextField({ value }: {value: string}) {
    const [editor] = useState(() => withReact(createEditor()))
    const initialValue = [
        {
          type: 'paragraph',
          children: [{ text: value }],
        },
      ]
    editor.children = initialValue;

    return (
        <div className="flex flex-col items-center justify-center">
            <Slate editor={editor} initialValue={initialValue}>
                <Editable />
            </Slate>
        </div>
    )
}