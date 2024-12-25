import { NotificationClient } from "./NotificationClient";
import { Reclamation } from "./Reclamation";

export interface Client {
    id: number;
    nom: string;
    prenom: string;
    adresse: string;
    email: string;
    telephone: string;
    dateCreation: Date;
  
    applicationUserId?: string; // '?' indique que la propriété est facultative
    applicationUser?: any;      // Remplacez 'any' par le modèle approprié si vous avez un modèle d'utilisateur
  
    reclamations?: Reclamation[]; // Remplacez 'Reclamation' par l'interface appropriée si elle existe
    notifications?: NotificationClient[]; // Remplacez 'NotificationClient' par l'interface appropriée si elle existe
  }