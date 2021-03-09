import fetch from "node-fetch";
import { ChatResponseInt } from "../interfaces/ChatResponseInt";

export const sendChatMessage = async (
  message: string,
  authToken: string,
  username: string
): Promise<void> => {
  const baseUrl = process.env.ROCKET_CHAT_URL;

  const headers = {
    "X-Auth-Token": authToken,
    "X-User-Id": username,
    "Content-Type": "application/json",
  };

  const body = {
    channel: "translators",
    text: message,
  };

  const rawData = await fetch(`${baseUrl}/api/v1/chat.postMessage`, {
    method: "post",
    body: JSON.stringify(body),
    headers,
  });

  const parsedData: ChatResponseInt = await rawData.json();

  if (!parsedData.success) {
    console.error("Failed to send message...");
    return;
  }

  console.log("Message sent!");
};
