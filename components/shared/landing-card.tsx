"use client";
import React from 'react'
import { Box } from '../ui/box';
import { Text } from '../ui/text';
import { isBrowser } from 'react-device-detect'
import { useMediaQuery } from 'react-responsive';
import { Button } from '../ui/button';
import Image from 'next/image';
import Contact from './contact';
function LandingCard() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [showDrawer, setShowDrawer] = React.useState(false);
    const drawerToggle = (show: boolean) => {
        setShowDrawer(show)
    }
    return (
        <Box className={`flex ${(isBrowser && !isMobile) ? 'min-h-[500px]' : 'min-h-[350px]'} flex-col h-full items-start justify-center gap-10 px-4 md:flex-row md:items-center md:justify-between md:gap-0 md:px-32 md:pt-24 pt-6 pb-4`}>
            <Box className="z-10 md:my-auto flex min-h-[350px] w-full flex-col items-start justify-center gap-4 md:w-1/2">
                <Box className="absolute bottom-6 right-4 h-[65px] w-[65px] max-md:opacity-0">
                    <Image
                        fill
                        priority
                        src="/grid-dots.svg" alt={''}
                    />
                </Box>
                <Box className="flex w-full flex-row items-center justify-start gap-2">
                    <Text className="fira-code-font text-[25px] font-semibold text-typography-white">
                        Ukweh C. Everest is a
                        <Text className="p-1 text-[25px] text-[#C778DD]">Fullstack Developer</Text> and a <Text className="p-1 text-[25px] text-[#C778DD]">Machine Learning Engineer.</Text>
                    </Text>
                </Box>
                <Box className="flex flex-col items-start justify-start gap-2">
                    <Text className="text-gray-300">
                        with strong experience and rational in building web applications and machine learning models. Passionate about creating efficient and scalable solutions.
                    </Text>
                </Box>
                <Box className="relative flex flex-col items-start justify-start gap-2">
                    <Button onPress={() => drawerToggle(true)} className="flex h-[45px] w-[150px] items-center justify-center rounded-2xl border border-[#C778DD] bg-transparent hover:border-[#c148e2] hover:bg-transparent hover:text-white focus:bg-transparent active:bg-[#000] active:bg-transparent">
                        <Text className="text-white">
                            Contact me !!
                        </Text>
                    </Button>
                    <Contact showDrawer={showDrawer} drawerToggle={drawerToggle} />
                </Box>
                <Box className="absolute bottom-0 left-2 h-[65px] w-[65px] max-md:opacity-0">
                    <Image
                        fill
                        priority
                        src="/maze.svg" alt={''}
                    />
                </Box>
            </Box>
            <Box className="flex w-full flex-col items-start justify-start md:w-1/2">
                <Box className="-z-10 flex h-full w-full items-center justify-center">
                    <Box className="absolute -top-16 left-2 h-[65px] w-[65px] md:-top-24 md:left-14">
                        <Image
                            fill
                            priority
                            src="/maze.svg" alt={''}
                        />
                    </Box>
                    <Box className="absolute -z-10 h-[500px] w-[500px] max-md:w-full max-md:aspect-square">
                        <Image 
                            className="object-cover"
                            fill
                            priority
                            src="/avatar.png" 
                            alt={''}
                        />
                        <Box className="absolute bottom-0 left-0 flex h-8 w-[500px] flex-row items-center justify-center gap-3 border border-solid border-white px-2 max-md:bottom-10 max-md:w-full">
                            <Box className="flex">
                                <Text className="text-white max-md:text-xs">Currently surfing the internet for something new</Text>
                            </Box>
                            <Box className="flex h-full flex-row items-center justify-start gap-1">
                                <Button
                                    onPress={() => window.open('https://github.com/relativity-codes', '_blank')} className="flex h-4 w-4 cursor-pointer rounded-sm border border-solid bg-white p-1">
                                    <Image
                                        fill
                                        color="white"
                                        priority
                                        src="/github.svg" alt={''}
                                    />
                                </Button>
                                <Button
                                    onPress={() => window.open('https://linkedin.com/in/ukweheverest', '_blank')} className="flex h-4 w-4 cursor-pointer rounded-sm border border-solid bg-white p-1">
                                    <Image
                                        fill
                                        color="white"
                                        priority
                                        src="/linkedin.svg" alt={''}
                                    />
                                </Button>
                                <Button
                                    onPress={() => window.open('/resume.pdf', '_blank')} className="flex h-4 w-4 cursor-pointer rounded-sm border border-solid bg-white p-1">
                                    <Image
                                        fill
                                        color="white"
                                        priority
                                        src="/doc.svg" alt={''}
                                    />
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="absolute bottom-10 right-4 h-[65px] w-[65px]">
                        <Image
                            fill
                            priority
                            src="/grid-dots.svg" alt={''}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default LandingCard;
