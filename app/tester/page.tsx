'use client'

import { Slider } from '@/components/ui/slider'
import { useState } from 'react'
import { SuccessChart } from '@/components/ui/success-chart'

export default function Page() {

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='flex flex-col items-center justify-center w-[50vh] h-[50vh] rounded-xl'>
                <SuccessChart />
            </div>
        </div>
    )
}

