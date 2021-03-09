export interface AuthResponseInt {
  status: string;
  data: {
    authToken: string;
    userId: string;
    me: {
      _id: string;
      name: string;
      emails: {
        address: string;
        verified: boolean;
      }[];
      status: string;
      statusConnection: string;
      username: string;
      utcOffset: number;
      active: boolean;
      rolse: string[];
      settings: unknown;
      avatarUrl: string;
    };
  };
}
