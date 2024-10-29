export interface NotificationPayload {
  GroupID: string;

  MessageID?: string;

  SenderName: string;

  SenderID?: string;

  Content: string;

  CreatedAt?: number;
}
