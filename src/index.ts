import chalk from "chalk";
import { HeadersInit } from "node-fetch";
import { projectList } from "./data/projectList";
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

  const reportList = [];

  for (const project of projectList) {
    console.log(chalk.yellow(`Generating report for ${project.name}`));
    let requestReport = await generateReport(apiHeader, project);

    const reportId = requestReport.data.identifier;

    while (requestReport.data.status !== "finished") {
      console.log(chalk.cyan("Report pending..."));
      await sleep(3000);
      requestReport = await checkReportStatus(apiHeader, reportId, project);
    }

    console.log(chalk.green("Report complete!"));

    console.log(chalk.yellow("Getting download link..."));

    const downloadLinkData = await await getReportDownloadUrl(
      apiHeader,
      reportId,
      project
    );

    const downloadLink = downloadLinkData.data.url;

    console.log(chalk.green("Download link obtained!"));

    const downloadData = await downloadReport(downloadLink);

    console.log(chalk.green("Downloaded data!"));

    console.log(chalk.yellow("Getting list of top 10 contributors."));

    const topTenList = topTenContributors(downloadData, project);

    reportList.push(topTenList);

    console.log(`${project.name} complete!`);
  }

  reportList.forEach((report) => console.log(chalk.magenta(report)));
})();
