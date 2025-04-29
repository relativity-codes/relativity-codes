"use client";
import React from 'react'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu'
import { Text } from '@/components/ui/text'
import { isBrowser } from 'react-device-detect'
import {
    AlignRight
} from "lucide-react"
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';

const Navbar = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <Box className={`fixed left-0 top-0 z-10 flex h-16 w-screen flex-row items-center justify-between bg-[rgba(0,0,0,0.5)] px-4 py-2 md:px-32`}>
            <Box className={`flex flex-row items-center space-x-2`}>
                <Link href="/" className=""> <Text className={`font-bold text-white`}>
                    R E L A T I V I T Y - C O D E S
                </Text>
                </Link>
            </Box>
            {(isBrowser && !isMobile) ?
                (<Box className={`flex flex-row items-center gap-4`}>
                    <Link href="/" className={`flex cursor-pointer flex-row items-center gap-0 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent`}>
                        <Text className="font-semibold text-[#C778DD]">#</Text>
                        <Text className={`font-semibold text-white`}>
                            Home
                        </Text>
                    </Link>
                    <Link href="/skills" className={`flex cursor-pointer flex-row items-center gap-0 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent`}>
                        <Text className="font-semibold text-[#C778DD]">#</Text>
                        <Text className={`font-semibold text-white`}>Skills
                        </Text>
                    </Link>
                    <Link href="/experience" className={`flex cursor-pointer flex-row items-center gap-0 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent`}>
                        <Text className="font-semibold text-[#C778DD]">#</Text>
                        <Text className={`font-semibold text-white`}>Experience
                        </Text>
                    </Link>
                    {/* <Link href="/about" className={`flex cursor-pointer flex-row items-center gap-0 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent`}>
                        <Text className="font-semibold text-[#C778DD]">#</Text>
                        <Text className={`font-semibold text-white`}>About</Text>
                    </Link> */}
                    <Link href="/contact" className={`flex cursor-pointer flex-row items-center gap-0 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent`}>
                        <Text className="font-semibold text-[#C778DD]">#</Text>
                        <Text className={`font-semibold text-white`}>Contact</Text>
                    </Link>
                </Box>) : (
                    <Menu
                        className="bg-black text-white"
                        placement="bottom"
                        offset={5}
                        disabledKeys={["Settings"]}
                        trigger={({ ...triggerProps }) => {
                            return (
                                <Button className="m-0 my-0 bg-transparent p-0 py-0" {...triggerProps}>
                                    <Icon as={AlignRight} className="" />
                                </Button>
                            )
                        }}
                    >
                        <MenuItem onPress={() => window.open("/")} className="cursor-pointer" key="Home" textValue="Home">
                            <Text className="text-md font-semibold text-[#C778DD]">#</Text>
                            <MenuItemLabel size="md" className="text-md font-semibold text-white hover:text-black focus:text-black">Home</MenuItemLabel>
                        </MenuItem>
                        <MenuItem onPress={() => window.open("/experience")} className="cursor-pointer" key="Experience" textValue="Experience">
                            <Text className="text-md font-semibold text-[#C778DD]">#</Text>
                            <MenuItemLabel size="md" className="text-md font-semibold text-white hover:text-black focus:text-black">Experience</MenuItemLabel>
                        </MenuItem>
                        <MenuItem onPress={() => window.open("/skills")} className="cursor-pointer" key="Skills" textValue="Skills">
                            <Text className="text-md font-semibold text-[#C778DD]">#</Text>
                            <MenuItemLabel size="md" className="text-md font-semibold text-white hover:text-black focus:text-black">Skills</MenuItemLabel>
                        </MenuItem>
                        {/* <MenuItem onPress={() => window.open("/about")} className="cursor-pointer" key="About" textValue="About">
                            <Text className="text-md font-semibold text-[#C778DD]">#</Text>
                            <MenuItemLabel size="md" className="text-md font-semibold text-white hover:text-black focus:text-black">About</MenuItemLabel>
                        </MenuItem> */}
                        <MenuItem onPress={() => window.open("/contact")} className="cursor-pointer" key="Contact" textValue="Contact">
                            <Text className="text-md font-semibold text-[#C778DD]">#</Text>
                            <MenuItemLabel size="md" className="text-md font-semibold text-white hover:text-black focus:text-black">Contact</MenuItemLabel>
                        </MenuItem>
                    </Menu>
                )
            }
        </Box>
    )
}

export default Navbar
