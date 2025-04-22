"use client"
import React, { Suspense } from 'react'
import { Box } from '@/components/ui/box'
import SkillsDisplay from '@/components/shared/SkillsDisplay'
import ProgrammingLanguages from '@/components/shared/ProgrammingLanguages'

const Page = () => {
    return (
        <Suspense fallback={<div className="flex h-full w-full items-center justify-center">Loading...</div>}>
            <Box className="flex w-full flex-grow flex-col gap-4 py-10">
                <Box className="flex w-full flex-col items-start justify-start">
                    <SkillsDisplay />
                </Box>
                <Box className="flex w-full flex-col items-start justify-start">
                    <ProgrammingLanguages />
                </Box>
            </Box>
        </Suspense>
    )
}

export default Page