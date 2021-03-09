import fetch, { HeadersInit } from "node-fetch";
import { ProjectInt } from "../interfaces/ProjectInt";
import { ReportDownloadUrlInt } from "../interfaces/ReportDownloadUrlInt";

export const getReportDownloadUrl = async (
  headers: HeadersInit,
  identifier: string,
  project: ProjectInt
): Promise<ReportDownloadUrlInt> => {
  const rawData = await fetch(
    `https://freecodecamp.crowdin.com/api/v2/projects/${project.id}/reports/${identifier}/download`,
    {
      method: "GET",
      headers,
    }
  );

  const parsedData: ReportDownloadUrlInt = await rawData.json();

  return parsedData;
};
