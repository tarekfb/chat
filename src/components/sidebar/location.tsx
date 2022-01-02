import { VStack, Text, Icon, HStack } from "@chakra-ui/react";
import { FaCity } from 'react-icons/fa'
import React from "react";
import { ILocation } from "../../types/types";

export const Location = ({ city, latitude, longitude }: ILocation) => {
    return (
        <VStack>
            <HStack>
                <Icon as={FaCity} />
                <Text fontSize="2xl">
                    {city}
                </Text>
            </HStack>
            <HStack>
                <Text fontSize="lg">
                    {latitude} ° N
                </Text>
                <Text fontSize="lg">
                    {longitude} ° E
                </Text>
            </HStack>
        </VStack>
    );
}