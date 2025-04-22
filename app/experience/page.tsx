"use client"
import React, { Suspense } from 'react'
import Experience from '@/components/shared/Experience'
import { Box } from '@/components/ui/box'
import ProgrammingLanguages from '@/components/shared/ProgrammingLanguages'

function Page() {
    return (
        <Suspense fallback={<div className="flex h-full w-full items-center justify-center">Loading...</div>}>
            <Box className="flex w-full flex-col py-10 md:flex-row">
                <Experience />
            </Box>
            <Box className="flex w-full flex-col items-start justify-start">
                <ProgrammingLanguages />
            </Box>
        </Suspense>
    )
}

export default Page