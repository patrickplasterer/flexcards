import { SignIn } from "@clerk/nextjs"
import * as React from 'react'


export default function Page() {
    return (
        <div className="flex flex-col grow items-center justify-center">
            <SignIn />
        </div>
    )
}