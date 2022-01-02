import { VStack, Flex, Heading, WrapItem, Avatar, Text } from "@chakra-ui/react";
import React from "react";

export const Author = () => {
    return (
        <VStack spacing="4">
            <Flex direction="column" placeItems="center">
                <Heading as="h4" fontFamily="monospace" fontSize="3xl">
                    Built by:
                </Heading>
                <Text fontSize="3xl">
                    Tarek Bermalm
                </Text>
            </Flex>
            <WrapItem w="40" h="40">
                <Avatar h="full" w="full" src="https://media-exp1.licdn.com/dms/image/C4D03AQFFluubvKes_g/profile-displayphoto-shrink_800_800/0/1638543189901?e=1646265600&v=beta&t=3YnUxHmFjrAgcTH4PC0AtqPJCw1oeJBsp81o1hQdQV8" />
            </WrapItem>
        </VStack>
    );
}