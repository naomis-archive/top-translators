import fetch, { HeadersInit } from "node-fetch";
import { InitialReportInt } from "../interfaces/InitialReportInt";
import { ProjectInt } from "../interfaces/ProjectInt";

export const generateReport = async (
  headers: HeadersInit,
  project: ProjectInt
): Promise<InitialReportInt> => {
  const body = {
    name: "top-members",
    schema: {
      unit: "words",
      format: "json",
      dateFrom: new Date(Date.now() - 604800000).toISOString(),
      dateTo: new Date(Date.now()).toISOString(),
    },
  };

  const rawData = await fetch(
    `https://freecodecamp.crowdin.com/api/v2/projects/${project.id}/reports`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers,
    }
  );

  const parsedData: InitialReportInt = await rawData.json();

  return parsedData;
};
