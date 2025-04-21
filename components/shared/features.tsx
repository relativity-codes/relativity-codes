"use client";
import React from 'react'
import { Box } from '../ui/box';
import FeatureCard from './feature-card';

function Features() {
    return (
        <Box className={`flex h-full flex-col items-start justify-start gap-4 px-4 md:flex-row md:items-center md:justify-between md:gap-0 md:px-32`}>
            <FeatureCard
                iconSvg="document-data.svg"
                name="Docs"
                desc="Find in-depth information about gluestack features and API."
            />
            <FeatureCard
                iconSvg="lightbulb-person.svg"
                name="Learn"
                desc="Learn about gluestack in an interactive course with quizzes!"
            />
            <FeatureCard
                iconSvg="rocket.svg"
                name="Deploy"
                desc="Instantly drop your gluestack site to a shareable URL with vercel."
            />
        </Box>
    )
}

export default Features