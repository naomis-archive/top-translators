export interface FinalReportInt {
  name: string;
  url: string;
  unit: string;
  dateRange: {
    from: string;
    to: string;
  };
  language: string;
  data: ContributorInt[];
}

export interface ContributorInt {
  user: UserInt;
  languages: LanguageInt[];
  translated: number;
  approved: number;
  voted: number;
  positiveVotes: number;
  negativeVotes: number;
  winning: number;
}

export interface UserInt {
  id: string;
  username: string;
  fullName: string;
  avatarURL: string;
}

export interface LanguageInt {
  id: string;
  name: string;
}
