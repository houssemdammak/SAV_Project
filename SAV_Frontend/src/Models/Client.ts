import { ClientArticle } from './ClientArticle';
import { NotificationClient } from './NotificationClient';
import { Reclamation } from './Reclamation';

export interface Client {
  id: number;
  nom: string;
  prenom: string;
  adresse: string;
  email: string;
  telephone: string;
  dateCreation: Date;
  applicationUserId?: string;
  applicationUser?: any;
  reclamations?: Reclamation[];
  notifications?: NotificationClient[];
  clientArticles?: ClientArticle[];
}
