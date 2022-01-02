import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Flex, HStack } from "@chakra-ui/layout";
import { ChatIcon } from "@chakra-ui/icons";
import React, { useRef, useState } from "react"
import { IChat } from "../../types/types";
import { FormControl } from "@chakra-ui/form-control";
import { FaThumbsUp } from 'react-icons/fa';
import Icon from "@chakra-ui/icon";
import { useColorModeValue } from "@chakra-ui/react";


interface Props {
    sendMessage: (chat: IChat, content: string) => void;
    chat: IChat;
}

export const MessageWriting = ({ sendMessage, chat }: Props) => {
    const [value, setValue] = useState<string>("");
    const bgSend = useColorModeValue('gray.300', 'gray.600')

    const ref = useRef();

    const triggerClickForRef = (event: React.KeyboardEvent): void => {
        const code = event.keyCode || event.which;
        if (code === 13) {
            //13 is the enter keycode
            handleSubmit();
        }
    };

    const handleSubmit = (): void => {
        if (value) {
            sendMessage(chat, value);
            setValue("");
        }
    }
    const sendDefault = (): void => {
        let icon2 = "/uf164";
        icon2 = icon2.substr(3);
        icon2 = String.fromCharCode(parseInt(icon2, 16));
        sendMessage(chat, icon2);
        //https://stackoverflow.com/questions/54572014/font-awesome-unicode-variable-in-react-native
        //https://fontawesome.com/v5.15/icons/thumbs-up
    }

    return (
        <FormControl>
            <HStack justifyContent="end" align="center" spacing="2">
                <Button onClick={handleSubmit} bg={bgSend}>
                    Send
                </Button>
                <Input textColor="black" placeholder="Aa" onKeyPress={(e: React.KeyboardEvent) => triggerClickForRef(e)} ref={ref} type='text' value={value} onChange={(e) => setValue(e.currentTarget.value)} bg="white" />
                <Button onClick={sendDefault} bg="none">
                    <Icon as={FaThumbsUp} color="red.300" w="6" h="6" />
                </Button>
            </HStack>
        </FormControl>
    )
}