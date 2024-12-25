import { Intervention } from "./Intervention";

export interface ResponsableSAV {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    applicationUserId?: string; // Propriété facultative
    applicationUser?: any; // Remplacez 'any' par l'interface appropriée si vous avez un modèle d'utilisateur
    interventions?: Intervention[]; // Remplacez 'Intervention' par l'interface appropriée si elle existe
  }
  