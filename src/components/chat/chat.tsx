import React, { useState } from "react";
import { Message } from "./message";
import { MessageWriting } from "./messageWriting";
import { MessageReceived } from "./messageReceived";
import { Infobar } from "./infobar";
import { auth } from "../../constants/tmpUsers";
import { Flex, Box, VStack, useColorModeValue } from "@chakra-ui/react";
import { IChat, IMessage } from "../../types/types";
import { Sidebar } from "../sidebar/sidebar";

interface Props {
  chat: IChat;
  sendMessage: (chat: IChat, content: string) => void;
}

//https://codesandbox.io/s/mcd2m?file=/src/components/Sidebar/index.tsx
export const Chat = ({ chat, sendMessage }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleSidebar = (): void => setIsOpen(!isOpen);

  const bgMain = useColorModeValue('gray.100', 'gray.900')
  const bgMessageReceived = useColorModeValue('red.200', 'red.900')
  const bgMessageSent = useColorModeValue('gray.200', 'gray.600')

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />
      <Flex direction="column" justifyContent="space-between" bg={bgMain} height="full" width="full">
        <Box top="0" w="full" padding="4" >
          <Infobar chat={chat} toggleSidebar={toggleSidebar} />
        </Box>
        <VStack spacing="4" direction="column" padding="4" flex="1" overflowY="auto" >
          {
            chat.messages.map((message: IMessage, i: number) => (
              <Box key={i} alignSelf={message.from.id == auth.id ? "flex-end" : "flex-start"}>
                {
                  message.from.id !== auth.id ?
                    <MessageReceived message={message} bg={bgMessageReceived} />
                    :
                    <Message message={message} bg={bgMessageSent} />
                }
              </Box>
            ))
          }
        </VStack >
        <Box bottom="0" w="full" padding="4"  >
          <MessageWriting sendMessage={sendMessage} chat={chat} />
        </Box>
      </Flex>
    </>
  );
}

