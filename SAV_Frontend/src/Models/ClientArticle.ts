import { Article } from './Article';
import { Client } from './Client';

export interface ClientArticle {
  clientId: number;
  client?: Client;
  articleId: number;
  article?: Article;
  dateFinGarantie? :string 
}
