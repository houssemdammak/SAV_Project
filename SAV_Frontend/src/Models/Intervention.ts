import { Piece } from "./Piece";
import { Reclamation } from "./Reclamation";
import { ResponsableSAV } from "./ResponsableSAV";

export interface Intervention {
    id: number;
    dateIntervention: Date;
    montantFacture?: number; // Propriété facultative
    estGratuit?: boolean; // Propriété facultative
    reclamationId: number;
  
    reclamation?: Reclamation; // Remplacez 'Reclamation' par l'interface appropriée si elle existe
    responsableSAVId: number;
  
    responsableSAV?: ResponsableSAV; // Remplacez 'ResponsableSAV' par l'interface appropriée si elle existe
    pieces?: Piece[]; // Remplacez 'Piece' par l'interface appropriée si elle existe
  }
  