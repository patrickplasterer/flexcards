"use client"

import React, { useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]

export default function Page() {
    const [editor] = useState(() => withReact(createEditor()))

    return (
        <div className="flex flex-col items-center justify-center">
            <Slate editor={editor} initialValue={initialValue}>
                <Editable />
            </Slate>
        </div>
    )
}