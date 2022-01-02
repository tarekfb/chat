import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, WrapItem } from "@chakra-ui/layout";
import React from "react";
import { IChat, IUser } from "../../types/types";
import { stripUsersOfAuth } from "../../utils/utils";

interface Props {
    chat: IChat;
    selectedChat: IChat;
    handleSelectChat: (c: IChat) => void;
}

export const GroupChatAvatar = ({ chat, selectedChat, handleSelectChat }: Props) => {

    return (
        <Box key={chat.id} bg={chat.id === selectedChat.id && "red.200"} padding="3" onClick={() => handleSelectChat(chat)}>
            {
                chat.users.length > 2 ?
                    <WrapItem w="45" h="45">
                        <Flex placeItems="center">
                            <Box>
                                <Avatar src={stripUsersOfAuth(chat.users)[0].url} mt="4" mr="-5" w="8" h="8" />
                                <Avatar src={stripUsersOfAuth(chat.users)[1].url} mb="4" w="8" h="8" />
                            </Box>
                        </Flex>
                    </WrapItem>
                    :
                    <WrapItem w="45" h="45">
                        <Avatar src={chat.users[0].url} />
                    </WrapItem>
            }

        </Box>
    );
}


