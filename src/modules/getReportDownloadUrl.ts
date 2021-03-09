import fetch, { HeadersInit } from "node-fetch";
import { ReportDownloadUrlInt } from "../interfaces/ReportDownloadUrlInt";

export const getReportDownloadUrl = async (
  headers: HeadersInit,
  identifier: string
): Promise<ReportDownloadUrlInt> => {
  const rawData = await fetch(
    `https://freecodecamp.crowdin.com/api/v2/projects/2/reports/${identifier}/download`,
    {
      method: "GET",
      headers,
    }
  );

  const parsedData: ReportDownloadUrlInt = await rawData.json();

  return parsedData;
};
