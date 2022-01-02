import { Avatar } from "@chakra-ui/avatar";
import { Grid, GridItem, WrapItem, Text, useColorModeValue} from "@chakra-ui/react";
import React from "react";
import { IToFromProps } from "../../types/types";
import { Message } from "./message";

export const MessageReceived = ({ message, bg }: IToFromProps) => {
    return (
        <Grid alignItems="center" gridTemplateRows="auto auto" gridTemplateColumns="auto 300px" columnGap="2" rowGap="1">
            <GridItem />
            <GridItem>
                <Text fontSize="sm" align="left">
                    {message.from.name}
                </Text>
            </GridItem>
            <GridItem alignSelf="end" mb="3">
                <WrapItem>
                    <Avatar src={message.from.url} w="10" h="10" />
                </WrapItem>
            </GridItem>
            <GridItem>
                <Message message={message} bg={bg} />
            </GridItem>
        </Grid>
    )
};

