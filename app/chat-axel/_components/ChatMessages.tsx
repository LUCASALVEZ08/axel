"use client";

import { useAppSelector } from "@/app/store";
import {
  selectCurrentChat,
  selectIsLoading,
  selectIsTyping,
} from "@/app/store/slice/chat";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { formatISOTime } from "@/app/_lib/utils/date";
import { Bot, User } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import TypeWriter from "@/app/_components/TypeWriter";
import MessageContent from "./MessageContent";
import { useBrender } from "@/app/_lib/hooks/useAxel";
import Image from "next/image";

const ChatMessages = () => {
  const currentChat = useAppSelector(selectCurrentChat);
  const isLoading = useAppSelector(selectIsLoading);
  const isTyping = useAppSelector(selectIsTyping);

  const { user } = useAppSelector((state) => state.auth);
  const { avatar } = useAppSelector((state) => state.appearance);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const chatId = currentChat.id;
  const getTypedIds = (chatId: string): string[] => {
    if (typeof window === "undefined") return [];
    const raw = localStorage.getItem(`typedAssistantIds:${chatId}`);
    return raw ? JSON.parse(raw) : [];
  };
  const addTypedId = (chatId: string, msgId: string) => {
    if (typeof window === "undefined") return;
    const ids = getTypedIds(chatId);
    if (!ids.includes(msgId)) {
      ids.push(msgId);
      localStorage.setItem(`typedAssistantIds:${chatId}`, JSON.stringify(ids));
    }
  };

  const [typedAssistantIds, setTypedAssistantIds] = useState<string[]>(() =>
    getTypedIds(chatId),
  );

  const lastAssistantIdx = currentChat.messages
    .map((msg: any, idx: number) => (msg.role === "assistant" ? idx : -1))
    .filter((idx: number) => idx !== -1)
    .pop();

  const [partialTypewriterText, setPartialTypewriterText] = useState("");

  const { speak, voiceEnabled } = useBrender(() => {});
  const lastAssistantMsg = currentChat.messages
    .slice()
    .reverse()
    .find((msg: { role: string }) => msg.role === "assistant");

  useEffect(() => {
    if (lastAssistantMsg && voiceEnabled) {
      speak(lastAssistantMsg.content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastAssistantMsg?.id, voiceEnabled]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentChat?.messages.length, isTyping]);

  useEffect(() => {
    setTypedAssistantIds(getTypedIds(chatId));
  }, [chatId]);

  useEffect(() => {
    if (
      lastAssistantIdx !== undefined &&
      !typedAssistantIds.includes(currentChat.messages[lastAssistantIdx]?.id)
    ) {
    }
  }, [currentChat, lastAssistantIdx, typedAssistantIds]);

  const handleTypeWriterComplete = (msgId: string) => {
    addTypedId(chatId, msgId);
    setTypedAssistantIds((prev) => [...prev, msgId]);
  };

  if (!currentChat) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
            Bem-vindo ao AxelAI
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Comece uma nova conversa para interagir com o assistente
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="mx-auto max-w-4xl space-y-6">
        {currentChat.messages.map((message: any, idx: number) => {
          const isLastAssistant =
            message.role === "assistant" &&
            idx === lastAssistantIdx &&
            !isLoading;

          if (isLastAssistant && !typedAssistantIds.includes(message.id)) {
            return (
              <div
                key={message.id}
                className={cn(
                  "flex gap-4",
                  message.role === "user" ? "justify-end" : "justify-start",
                )}
              >
                {message.role === "assistant" && avatar && (
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarImage src="/axel.svg" alt="AxelAI" />
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg px-4 py-3",
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100",
                  )}
                >
                  <TypeWriter
                    text={message.content}
                    onComplete={() => handleTypeWriterComplete(message.id)}
                    onTyping={setPartialTypewriterText}
                    speed={20}
                    visual={false}
                  />
                  <MessageContent content={partialTypewriterText} />
                  <p className="mt-1 text-xs opacity-70">
                    {formatISOTime(message.timestamp)}
                  </p>
                </div>
                {message.role === "user" && (
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <Image
                      src={user?.image || "/placeholder.png"}
                      alt={user?.name || "Avatar"}
                      width={20}
                      height={20}
                      className="rounded-full object-cover"
                    />
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  </Avatar>
                )}
              </div>
            );
          }

          return (
            <div
              key={message.id}
              className={cn(
                "flex gap-4",
                message.role === "user" ? "justify-end" : "justify-start",
              )}
            >
              {message.role === "assistant" && avatar && (
                <Avatar className="h-8 w-8 flex-shrink-0">
                  <AvatarImage src="/axel.svg" alt="AxelAI" />
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                </Avatar>
              )}
              <div
                className={cn(
                  "max-w-[80%] rounded-lg px-4 py-3",
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100",
                )}
              >
                <MessageContent content={message.content} />
                <p className="mt-1 text-xs opacity-70">
                  {formatISOTime(message.timestamp)}
                </p>
              </div>
              {message.role === "user" && (
                <Avatar className="h-8 w-8 flex-shrink-0">
                  <AvatarImage src={user?.image} alt="Usuário" />
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
                    <User className="h-4 w-4 text-white" />
                  </div>
                </Avatar>
              )}
            </div>
          );
        })}
        {isTyping && (
          <div className="flex justify-start gap-4">
            <Avatar className="h-8 w-8 flex-shrink-0">
              <AvatarImage src="/axel.svg" alt="AxelAI" />
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                <Bot className="h-4 w-4 text-white" />
              </div>
            </Avatar>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatMessages;
