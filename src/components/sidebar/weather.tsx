import { Text, Icon, HStack, Image } from "@chakra-ui/react";
import { FaTemperatureHigh } from 'react-icons/fa'
import React from "react";
import { IWeather } from "../../types/types";

export const Weather = ({ icon, description, temp }: IWeather) => {
    return (
        <HStack>
            <HStack>
                <Icon as={FaTemperatureHigh} />
                <Text fontSize="xl" whiteSpace="nowrap">
                    {temp} °C
                </Text>
            </HStack>
            <Image src={`http://openweathermap.org/img/wn/${icon}@2x.png`} h="16" w="16" />
            <Text fontSize="xl">
                {description}
            </Text>
        </HStack>
    );
}