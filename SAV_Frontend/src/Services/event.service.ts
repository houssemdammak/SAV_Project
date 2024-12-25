import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from 'src/Models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http:HttpClient) { }
  getAllEvents():Observable<Evt[]>{
    //type de retourne est une observable qui contient la liste des members
    return this.http.get<Evt[]>('http://localhost:3000/event')
  }
  getEvent(id:String):Observable<Evt>{
    //type de retourne est une observable qui contient la liste des members
    return this.http.get<Evt>(`http://localhost:3000/event/${id}`)
  }
  delete(eventId:string):Observable<void>{
    return this.http.delete<void>(`http://localhost:3000/event/${eventId}`)
  }
  add(event:Evt):Observable<void>{
    return this.http.post<void>('http://localhost:3000/event',event)
  }
  edit(id:string,event:Evt):Observable<void>{
    return this.http.put<void>(`http://localhost:3000/event/${id}`,event)

  }
}
