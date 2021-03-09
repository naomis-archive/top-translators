import { staffList } from "../data/staffList";
import { FinalReportInt } from "../interfaces/FinalReportInt";

export const topTenContributors = (data: FinalReportInt): string => {
  const userList = data.data.filter(
    (value) => !staffList.includes(value.user.username)
  );

  const topTenArray = userList.slice(0, 10).map((val, index) => {
    return `#${++index} - ${val.user.fullName} with ${
      val.translated
    } translations!`;
  });

  topTenArray.unshift(
    "Top Curriculum Contributors by Translation for Last Seven Days"
  );

  return topTenArray.join("\n");
};
