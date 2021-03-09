import fetch, { HeadersInit } from "node-fetch";
import { InitialReportInt } from "../interfaces/InitialReportInt";
import { ProjectInt } from "../interfaces/ProjectInt";

export const checkReportStatus = async (
  headers: HeadersInit,
  identifier: string,
  project: ProjectInt
): Promise<InitialReportInt> => {
  const rawData = await fetch(
    `https://freecodecamp.crowdin.com/api/v2/projects/${project.id}/reports/${identifier}`,
    {
      method: "GET",
      headers,
    }
  );

  const parsedData: InitialReportInt = await rawData.json();

  return parsedData;
};
