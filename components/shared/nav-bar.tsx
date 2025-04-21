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

const Navbar = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <Box className={`flex h-16 w-screen flex-row items-center justify-between bg-transparent px-4 py-2 md:px-32`}>
            <Box className={`flex flex-row items-center space-x-2`}>
                <Text className={`font-bold text-white`}>
                    R E L A T I V I T Y - C O D E S
                </Text>
            </Box>
            {(isBrowser && !isMobile) ?
                (<Box className={`flex flex-row items-center gap-4`}>
                    <Box className={`flex cursor-pointer flex-row items-center gap-0 hover:underline`}>
                        <Text className="font-semibold text-[#C778DD]">#</Text>
                        <Text className={`font-semibold text-white`}>
                            Home
                        </Text>
                    </Box>
                    <Box className={`flex cursor-pointer flex-row items-center gap-0 hover:underline`}>
                        <Text className="font-semibold text-[#C778DD]">#</Text>
                        <Text className={`font-semibold text-white`}>Skills
                        </Text>
                    </Box>
                    <Box className={`flex cursor-pointer flex-row items-center gap-0 hover:underline`}>
                        <Text className="font-semibold text-[#C778DD]">#</Text>
                        <Text className={`font-semibold text-white`}>Experience
                        </Text>
                    </Box>
                    <Box className={`flex cursor-pointer flex-row items-center gap-0 hover:underline`}>
                        <Text className="font-semibold text-[#C778DD]">#</Text>
                        <Text className={`font-semibold text-white`}>About</Text>
                    </Box>
                    <Box className={`flex cursor-pointer flex-row items-center gap-0 hover:underline`}>
                        <Text className="font-semibold text-[#C778DD]">#</Text>
                        <Text className={`font-semibold text-white`}>Contact</Text>
                    </Box>
                </Box>) : (
                    <Menu
                        className="bg-black"
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
                        <MenuItem className="cursor-pointer" key="Home" textValue="Home">
                            <Text className="text-md font-semibold text-[#C778DD]">#</Text>
                            <MenuItemLabel size="md" className="text-md font-semibold text-white hover:text-black focus:text-black">Home</MenuItemLabel>
                        </MenuItem>
                        <MenuItem className="cursor-pointer" key="Experience" textValue="Experience">
                            <Text className="text-md font-semibold text-[#C778DD]">#</Text>
                            <MenuItemLabel size="md" className="text-md font-semibold text-white hover:text-black focus:text-black">Experience</MenuItemLabel>
                        </MenuItem>
                        <MenuItem className="cursor-pointer" key="Experience" textValue="Experience">
                            <Text className="text-md font-semibold text-[#C778DD]">#</Text>
                            <MenuItemLabel size="md" className="text-md font-semibold text-white hover:text-black focus:text-black">Skills</MenuItemLabel>
                        </MenuItem>
                        <MenuItem className="cursor-pointer" key="About" textValue="About">
                            <Text className="text-md font-semibold text-[#C778DD]">#</Text>
                            <MenuItemLabel size="md" className="text-md font-semibold text-white hover:text-black focus:text-black">About</MenuItemLabel>
                        </MenuItem>
                        <MenuItem className="cursor-pointer" key="Contact" textValue="Contact">
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
