import fetch from "node-fetch";
import { AuthResponseInt } from "../interfaces/AuthResponseInt";

export const authenticateChat = async (): Promise<
  AuthResponseInt | undefined
> => {
  const password = process.env.ROCKET_CHAT_PASSWORD;
  const user = process.env.ROCKET_CHAT_USERNAME;
  const baseUrl = process.env.ROCKET_CHAT_URL;

  if (!password || !user || !baseUrl) {
    console.error("Missing Rocket.Chat env values. Cannot authenticate");
    return;
  }

  const headers = {
    "Content-Type": "application/json",
  };

  const body = {
    user,
    password,
  };

  const rawData = await fetch(`${baseUrl}/api/v1/login`, {
    method: "post",
    body: JSON.stringify(body),
    headers,
  });

  const parsedData: AuthResponseInt = await rawData.json();

  if (parsedData.status !== "success") {
    console.error("Could not authenticate. Check your credentials.");
    console.log(parsedData);
    return;
  }

  return parsedData;
};
