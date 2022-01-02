import { Flex } from "@chakra-ui/react";
import React from "react";
import { auth } from "../../constants/tmpUsers";
import { IChat, IUser } from "../../types/types";
import { Actions } from "./actions";
import { Info } from "./info";

interface Props {
    chat: IChat
    toggleSidebar: () => void
}

export const Infobar = ({ chat, toggleSidebar }: Props) => {
    const generateChatName = (): string => {
        let chatName: string = "";
        const strippedUsers: IUser[] = chat.users.filter((user: IUser) => user.id != auth.id);

        const isGroupChat: boolean = chat.users.length > 2 ? true : false;
        if (!isGroupChat) {
            return chatName += strippedUsers[0].name;
        }

        let moreThanThreeMembers: boolean;
        strippedUsers.forEach((user: IUser, i: number) => {
            if (i > 3) {
                moreThanThreeMembers = true;
                return;
            }
            chatName += i < 1 ? user.name : ", " + user.name; // add comma if not first name
        });
        return chatName;
    }

    return (
        <Flex direction="row">
            <Info generateChatName={generateChatName} chat={chat} />
            <Actions toggleSidebar={toggleSidebar} />
        </Flex>
    );
}