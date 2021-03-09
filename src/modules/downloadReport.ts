import fetch from "node-fetch";
import { FinalReportInt } from "../interfaces/FinalReportInt";

export const downloadReport = async (url: string): Promise<FinalReportInt> => {
  const rawData = await fetch(url, {
    method: "get",
  });

  const parsedData: FinalReportInt = await rawData.json();

  return parsedData;
};
