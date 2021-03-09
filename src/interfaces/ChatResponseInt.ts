export interface ChatResponseInt {
  ts: number;
  channel: string;
  message: ChatMessageInt;
  success: boolean;
}

interface ChatMessageInt {
  alias: string;
  msg: string;
  parseUrls: boolean;
  groupable: boolean;
  ts: string;
  u: {
    _id: string;
    username: string;
  };
  rid: string;
  _updatedAt: string;
  _id: string;
}
