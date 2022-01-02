import { HStack, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { baseMessageStyle } from "../../constants/constants";
import { IToFromProps, IToFromStyle } from "../../types/types";

export const Message = ({ message, bg }: IToFromProps) => {
    const textColor = useColorModeValue('gray.800', 'gray.200')

    
    const style: IToFromStyle = {
        ...baseMessageStyle,
        bg: bg,
        // direction: "row",
        // spacing: "2"
    }

    return (
        <HStack {...style} direction="row" spacing="2">
            <Flex direction="column" w="full" h="full">
                <Text align="left">{message.content}</Text>
                <Text fontSize="xs" align="right" color={textColor}>{message.timestamp}</Text>
            </Flex>
        </HStack>
    )
};

