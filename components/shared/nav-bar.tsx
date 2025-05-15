"use client";
import React from 'react'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu'
import { Text } from '@/components/ui/text'
import { isBrowser } from 'react-device-detect'
import { AlignRight } from "lucide-react"
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const navItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.3,
      ease: "easeOut"
    }
  }),
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

const menuButtonVariants = {
  hidden: { opacity: 0, rotate: 90 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.1,
    color: "#C778DD",
    transition: { duration: 0.2 }
  }
};

const Navbar = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="fixed left-0 top-0 z-10 w-screen"
        >
            <Box className={`flex h-16 w-full flex-row items-center justify-between bg-[rgba(0,0,0,0.5)] px-4 py-2 md:px-32`}>
                <motion.div 
                    className={`flex flex-row items-center space-x-2`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Link href="/">
                        <Text className={`font-bold text-white`}>
                            R E L A T I V I T Y - C O D E S
                        </Text>
                    </Link>
                </motion.div>
                
                {(isBrowser && !isMobile) ? (
                    <Box className={`flex flex-row items-center gap-4`}>
                        {['Home', 'Skills', 'Experience', 'Contact'].map((item, i) => (
                            <motion.div
                                key={item}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={navItemVariants}
                                whileHover="hover"
                            >
                                <Link 
                                    href={`/${item.toLowerCase()}`} 
                                    className={`flex cursor-pointer flex-row items-center gap-0 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent`}
                                >
                                    <Text className="font-semibold text-[#C778DD]">#</Text>
                                    <Text className={`font-semibold text-white`}>
                                        {item}
                                    </Text>
                                </Link>
                            </motion.div>
                        ))}
                    </Box>
                ) : (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={menuButtonVariants}
                        whileHover="hover"
                    >
                        <Menu
                            className="bg-black text-white"
                            placement="bottom"
                            offset={5}
                            disabledKeys={["Settings"]}
                            trigger={({ ...triggerProps }) => {
                                return (
                                    <Button 
                                        className="m-0 my-0 bg-transparent p-0 py-0" 
                                        {...triggerProps}
                                    >
                                        <Icon as={AlignRight} className="" />
                                    </Button>
                                )
                            }}
                        >
                            {['Home', 'Experience', 'Skills', 'Contact'].map((item) => (
                                <MenuItem 
                                    key={item}
                                    onPress={() => window.open(`/${item.toLowerCase() === 'home'? '/' : item.toLowerCase()}`)} 
                                    className="cursor-pointer" 
                                    textValue={item}
                                >
                                    <Text className="text-md font-semibold text-[#C778DD]">#</Text>
                                    <MenuItemLabel 
                                        size="md" 
                                        className="text-md font-semibold text-white hover:text-black focus:text-black"
                                    >
                                        {item}
                                    </MenuItemLabel>
                                </MenuItem>
                            ))}
                        </Menu>
                    </motion.div>
                )}
            </Box>
        </motion.div>
    )
}

export default Navbar
