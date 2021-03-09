import { staffList } from "../data/staffList";
import { FinalReportInt } from "../interfaces/FinalReportInt";
import { ProjectInt } from "../interfaces/ProjectInt";

export const topTenContributors = (
  data: FinalReportInt,
  project: ProjectInt
): string => {
  const userList = data.data.filter(
    (value) => !staffList.includes(value.user.username)
  );

  const topTenArray = userList.slice(0, 10).map((val, index) => {
    return `#${++index} - ${val.user.fullName} with ${
      val.translated
    } translations!`;
  });

  topTenArray.unshift(
    `Top ${project.name} Contributors by Translation for Last Seven Days`
  );

  topTenArray.push("Thank you for your contributions.");

  return topTenArray.join("\n");
};
