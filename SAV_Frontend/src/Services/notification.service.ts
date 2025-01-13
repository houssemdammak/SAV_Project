import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationClient } from 'src/Models/NotificationClient';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient) { }
  getAllNotificationCLients():Observable<NotificationClient[]>{
    return this.http.get<NotificationClient[]>('https://localhost:7185/api/NotificationCLient')
  }

  getNotificationCLient(id:number):Observable<NotificationClient>{
    return this.http.get<NotificationClient>(`https://localhost:7185/NotificationCLient/${id}`)
  }
}
