import { HStack, Text } from "@chakra-ui/react"
import React from "react"
import { IChat } from "../../types/types"
import { ChatAvatar } from "../contacts/chatAvatar"

interface Props {
    chat: IChat;
    generateChatName: () => string
}

export const Info = ({ chat, generateChatName }: Props) => {
    return (
        <HStack spacing="4">
            <ChatAvatar chat={chat} />
            <Text fontWeight="semibold">
                {generateChatName()}
            </Text>
        </HStack>
    )
}