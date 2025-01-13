import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../Models/Article';
import { ArticleCreateModel } from 'src/Dtos/ArticleCreateModel';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http:HttpClient) { }
  getAllArticles():Observable<Article[]>{
    return this.http.get<Article[]>('https://localhost:7185/api/Article')
  }
  getArticle(id:number):Observable<Article>{
    return this.http.get<Article>(`https://localhost:7185/api/Article/${id}`)
  }
  delete(id:number):Observable<void>{
    return this.http.delete<void>(`https://localhost:7185/api/Article/${id}`)
  }
  add(article:ArticleCreateModel):Observable<void>{
    return this.http.post<void>('https://localhost:7185/api/Article',article)
  }
  edit(id:number,article:Article):Observable<void>{
    return this.http.put<void>(`https://localhost:7185/api/Article/${id}`,article)

  }
}
