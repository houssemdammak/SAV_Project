import { Article } from "./Article";
import { Client } from "./Client";
import { Intervention } from "./Intervention";
import { StatutReclamation } from "./StatutReclamation";

export interface Reclamation {
    id: number;
    dateReclamation: Date;
    description: string;
    clientId: number;
  
    client?: Client; // Remplacez 'Client' par l'interface appropriée si elle existe
    articleId: number;
  
    article?: Article; // Remplacez 'Article' par l'interface appropriée si elle existe
  
    statutReclamationId: number;
    statutReclamation?: StatutReclamation; // Remplacez 'StatutReclamation' par l'interface appropriée si elle existe
    interventions?: Intervention[]; // Remplacez 'Intervention' par l'interface appropriée si elle existe
  }
  