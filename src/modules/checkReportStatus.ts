import fetch, { HeadersInit } from "node-fetch";
import { InitialReportInt } from "../interfaces/InitialReportInt";

export const checkReportStatus = async (
  headers: HeadersInit,
  identifier: string
): Promise<InitialReportInt> => {
  const rawData = await fetch(
    `https://freecodecamp.crowdin.com/api/v2/projects/2/reports/${identifier}`,
    {
      method: "GET",
      headers,
    }
  );

  const parsedData: InitialReportInt = await rawData.json();

  return parsedData;
};
