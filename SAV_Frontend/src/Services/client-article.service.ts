import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientArticle } from 'src/Models/ClientArticle';

@Injectable({
  providedIn: 'root'
})
export class ClientArticleService {
 constructor(private http:HttpClient) { }
    getAllClientArticle():Observable<ClientArticle[]>{
      return this.http.get<ClientArticle[]>('https://localhost:7185/api/ClientArticle')
    }
  
    getClientArticle(id:number):Observable<ClientArticle>{
      return this.http.get<ClientArticle>(`https://localhost:7185/api/ClientArticle/${id}`)
    }
    add(ClientArticle:ClientArticle):Observable<void>{
      return this.http.post<void>('https://localhost:7185/api/ClientArticle',ClientArticle)
    }
    delete(ClientArticleId:number):Observable<void>{
      return this.http.delete<void>(`https://localhost:7185/api/ClientArticle/${ClientArticleId}`)
    }
    edit(id:number,ClientArticle:ClientArticle):Observable<void>{
      return this.http.put<void>(`https://localhost:7185/ClientArticle/${id}`,ClientArticle)
  
    }
}
