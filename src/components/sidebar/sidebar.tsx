import {
    Text, useColorModeValue, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, DrawerCloseButton, Avatar, WrapItem, HStack
} from '@chakra-ui/react'
import React from 'react';
import { auth } from "./../../constants/tmpUsers"
import { SidebarContent } from './sidebarContent';

interface Props {
    toggleSidebar: () => void
    isOpen: boolean
}

export const Sidebar = ({ isOpen, toggleSidebar }: Props) => {
    const bg = useColorModeValue('gray.200', 'black')

    return (
        <Drawer isOpen={isOpen} placement="right" onClose={toggleSidebar}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton _focus={{ outline: "none" }} _hover={{ outline: "none" }} />
                    <DrawerHeader>
                        <HStack spacing="3">
                            <WrapItem w="45" h="45">
                                <Avatar src={auth.url} />
                            </WrapItem>
                            <Text>
                                {auth.name}
                            </Text>
                        </HStack>
                    </DrawerHeader>
                    <DrawerBody>
                        <SidebarContent />
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
}
