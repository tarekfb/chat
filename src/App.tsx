import "./App.css";
import React, { useState } from 'react';
import { IUser, IMessage, IChat } from './types/types'
import { Chat } from './components/chat/chat'
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { ChatList } from "./components/contacts/chatList";
import { chats, quotes, users } from "./constants/tmpUsers";

export default function App() {
  const [chat, setChat] = useState<IChat>(chats[0]);
  const [auth, setAuth] = useState<IUser>(users[1]);
  const [chatList, setChatList] = useState<IChat[]>(chats);

  const handleSelectChat = (chat: IChat): void => {
    setChat(chat);
  }

  const sendMessage = (chat: IChat, content: string): void => {
    // create Message
    const message: IMessage = {
      content: content,
      from: auth,
      timestamp: new Date().toLocaleString()
    };

    // add message to chat
    chat.messages.push(message);

    // updateState with new chat
    const newChatList: IChat[] = [...chatList];
    const i: number = newChatList.findIndex((c) => c.id === chat.id);
    newChatList[i] = chat;
    setChatList(newChatList);

    setTimeout(() => replyMesssage(chat), Math.random() * (3000 - 1) + 1)
  }

  const replyMesssage = (chat: IChat): void => {
    const getRandomInt = (max: number): number => {
      return Math.floor(Math.random() * max);
    }

    // strip users of auth
    const strippedUsers: IUser[] = chat.users.filter((user: IUser) => user.id != auth.id);

    // create Message
    let content: string = quotes[getRandomInt(quotes.length)];
    // let content: string = quotes[0];
    const message: IMessage = {
      content: content,
      from: strippedUsers[getRandomInt(strippedUsers.length)],
      timestamp: new Date().toLocaleString()
    };

    chat.messages.push(message);

    const newChatList: IChat[] = [...chatList];
    const i: number = newChatList.findIndex((c) => c.id === chat.id);
    newChatList[i] = chat;
    setChatList(newChatList);
  }

  return (
    <Flex className="App" direction="row" width="100vw" height="100vh">
      <ChatList chats={chatList} selectedChat={chat} handleSelectChat={handleSelectChat} />
      <Chat chat={chat} sendMessage={sendMessage} />
    </Flex>
  );
}
