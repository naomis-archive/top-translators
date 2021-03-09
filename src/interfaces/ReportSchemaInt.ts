export interface ReportSchemaInt {
  unit: "strings" | "words" | "chars" | "chars_with_spaces";
  languageId?: string;
  format: "xlsx" | "csv" | "json";
  dateFrom?: string;
  dateTo?: string;
}
