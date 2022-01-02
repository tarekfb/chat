import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, WrapItem } from "@chakra-ui/layout";
import React from "react";
import { auth } from "../../constants/tmpUsers";
import { IChat } from "../../types/types";
import { stripUsersOfAuth } from "../../utils/utils";

interface Props {
    chat: IChat
}

export const ChatAvatar = ({ chat: { users } }: Props) => {
    return (
        <>
            {
                users.length > 2 ?
                    <WrapItem w="45" h="45">
                        <Flex placeItems="center">
                            <Box>
                                <Avatar src={stripUsersOfAuth(users)[0].url} mt="4" mr="-5" w="8" h="8" />
                                <Avatar src={stripUsersOfAuth(users)[1].url} mb="4" w="8" h="8" />
                            </Box>
                        </Flex>
                    </WrapItem>
                    :
                    <WrapItem w="45" h="45">
                        <Avatar src={users[0].id !== auth.id ? users[0].url : users[1].url} />
                    </WrapItem>
            }
        </>
    );
}


