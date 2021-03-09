import { ReportSchemaInt } from "./ReportSchemaInt";

export interface InitialReportInt {
  data: {
    identifier: string;
    status: string;
    progress: number;
    attributes: {
      reportName: string;
      schema: ReportSchemaInt;
    };
    createdAt: string;
    updatedAt: string;
    startedAt: string | null;
    finishedAt: string | null;
    eta: string | null;
  };
}
