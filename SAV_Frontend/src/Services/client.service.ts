import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/Models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) {

   }
     getAllClients():Observable<Client[]>{
       //type de retourne est une observable qui contient la liste des members
       return this.http.get<Client[]>('https://localhost:7185/api/Client')
     }
     getclient(id:number):Observable<Client>{
       //type de retourne est une observable qui contient la liste des members
       return this.http.get<Client>(`https://localhost:7185/api/Client/${id}`)
     }
}
