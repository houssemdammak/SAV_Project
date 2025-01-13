import { ClientArticle } from './ClientArticle';
import { Reclamation } from './Reclamation';

export interface Article {
  id: number;
  nom: string;
  description: string;
  dateFabrication: string;
  clientArticles?: ClientArticle[];
  reclamations: Reclamation[];
}
