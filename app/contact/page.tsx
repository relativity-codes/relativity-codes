"use client"
import React, { Suspense } from 'react'
import { Box } from '@/components/ui/box'
import ContactPage from '@/components/shared/contactPage'

function Page() {
    return (
        <Suspense fallback={<div className="flex h-full w-full items-center justify-center">Loading...</div>}>
            <Box className="flex w-full flex-col py-10 md:flex-row">
                <ContactPage />
            </Box>
        </Suspense>
    )
}

export default Page