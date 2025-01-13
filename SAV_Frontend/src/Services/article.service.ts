import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../Models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http:HttpClient) { }
  getAllEvents():Observable<Article[]>{
    //type de retourne est une observable qui contient la liste des members
    return this.http.get<Article[]>('http://localhost:3000/event')
  }
  getEvent(id:String):Observable<Article>{
    //type de retourne est une observable qui contient la liste des members
    return this.http.get<Article>(`http://localhost:3000/event/${id}`)
  }
  delete(eventId:string):Observable<void>{
    return this.http.delete<void>(`http://localhost:3000/event/${eventId}`)
  }
  add(event:Article):Observable<void>{
    return this.http.post<void>('http://localhost:3000/event',event)
  }
  edit(id:string,event:Article):Observable<void>{
    return this.http.put<void>(`http://localhost:3000/event/${id}`,event)

  }
}
