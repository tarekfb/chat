import { VStack } from "@chakra-ui/layout"
import { Box, useColorModeValue } from "@chakra-ui/react"
import React from "react"
import { IChat } from "../../types/types"
import { ChatAvatar } from './chatAvatar'

interface Props {
    chats: IChat[];
    selectedChat: IChat;
    handleSelectChat: (c: IChat) => void;
}

export const ChatList = ({ chats, selectedChat, handleSelectChat }: Props) => {
    const bgChat = useColorModeValue('red.200', 'red.900')
    const bgMain = useColorModeValue('gray.200', 'black')

    return (
        <VStack direction="column" background={bgMain} height="full">
            {
                chats.map((c: IChat) => (
                    <Box key={c.id} bg={c.id === selectedChat.id && bgChat} padding="3" onClick={() => handleSelectChat(c)}>
                        <ChatAvatar chat={c} />
                    </Box>
                ))
            }
        </VStack>
    );
}