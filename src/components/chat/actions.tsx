import { Button } from "@chakra-ui/button"
import { Text } from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode"
import Icon from "@chakra-ui/icon"
import { HStack } from "@chakra-ui/layout"
import React from "react"
import { FaMoon, FaSun, FaBars } from "react-icons/fa"

interface Props {
    toggleSidebar: () => void
}

export const Actions = ({ toggleSidebar }: Props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bgToggle = useColorModeValue('gray.300', 'gray.600')

    return (
        <HStack ml="auto" spacing="4">
            <Button onClick={toggleColorMode} bg={bgToggle}>
                <HStack>
                    <Text>
                        Toggle
                    </Text>
                    {colorMode === 'light' ? <Icon as={FaMoon} w="5" h="5" color="#001B4C" /> : <Icon as={FaSun} w="5" h="5" color="#ffd700" />}
                </HStack>
            </Button>
            <Button onClick={toggleSidebar} bg="none" _focus={{ outline: "none" }} _hover={{ outline: "none" }}>
                <Icon as={FaBars} w="6" h="6" />
            </Button>
        </HStack>
    )
}