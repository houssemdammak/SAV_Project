import { Client } from "./Client";

export interface NotificationClient {
    notificationClientId: number;
    senderId: number;
    senderName: string;
    receiverId: number;
    message: string;
    isRead: boolean;
    isVisited: boolean;
    createdAt: Date;
    client?: Client; // Remplacez 'Client' par l'interface correspondante si elle existe
  }
  