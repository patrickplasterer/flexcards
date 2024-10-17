'use client'

import { useState } from 'react'
import { Editor } from '@/components/ui/editor/editor'

export default function Page() {

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
                    <Editor />
        </div>
    )
}