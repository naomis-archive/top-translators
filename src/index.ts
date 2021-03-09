import { HeadersInit } from "node-fetch";
import { checkReportStatus } from "./modules/checkReportStatus";
import { downloadReport } from "./modules/downloadReport";
import { generateReport } from "./modules/generateReport";
import { getReportDownloadUrl } from "./modules/getReportDownloadUrl";
import { sleep } from "./modules/sleep";
import { topTenContributors } from "./modules/topTenContributors";

(async () => {
  const credentials = process.env.CROWDIN_API_KEY;

  if (!credentials) {
    console.error("API Token not found.");
    process.exit(1);
  }

  const apiHeader: HeadersInit = {
    Authorization: `Bearer ${credentials}`,
    "Content-Type": "application/json",
  };

  console.log("Generating Report");
  let requestReport = await generateReport(apiHeader);

  const reportId = requestReport.data.identifier;

  while (requestReport.data.status !== "finished") {
    console.log("Report pending...");
    await sleep(3000);
    requestReport = await checkReportStatus(apiHeader, reportId);
  }

  console.log("Report complete!");

  console.log("Getting download link...");

  const downloadLinkData = await await getReportDownloadUrl(
    apiHeader,
    reportId
  );

  const downloadLink = downloadLinkData.data.url;

  console.log("Download link obtained!");

  const downloadData = await downloadReport(downloadLink);

  console.log("Downloaded data!");

  console.log("Getting list of top 10 contributors.");

  const topTenList = topTenContributors(downloadData);

  console.log(topTenList);

  console.log("Process complete!");
})();
