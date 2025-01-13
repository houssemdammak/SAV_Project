import { Piece } from './Piece';
import { Reclamation } from './Reclamation';
import { ResponsableSAV } from './ResponsableSAV';

export interface Intervention {
  id: number;
  dateIntervention?: Date;
  montantFacture?: number;
  estGratuit?: boolean;
  reclamationId: number;

  reclamation?: Reclamation;
  responsableSAVId: number;

  responsableSAV?: ResponsableSAV;
  pieces?: Piece[];
}
