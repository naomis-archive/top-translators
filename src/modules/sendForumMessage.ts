export const sendForumMessage = async (
  message: string
): Promise<unknown | undefined> => {
  const baseUrl = process.env.DISCOURSE_URL;
  const username = process.env.DISCOURSE_USERNAME;
  const token = process.env.DISCOURSE_API_KEY;

  if (!baseUrl || !username || !token) {
    console.error("Missing forum env values");
    return;
  }

  const forumHeaders = {
    "Api-Key": token,
    "Api-Username": username,
    "Content-Type": "application/json",
  };

  const body = {
    title: "",
    topic_id: 0, //idk
    raw: "", //this is body
    category: 0, //category id for contributors?
  };
};
