import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/Models/Article';
import { Client } from 'src/Models/Client';
import { LoginModel } from 'src/Dtos/LoginModel';
import { RegisterModel } from 'src/Dtos/RegisterModel';
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
     getArticles(idClient:number):Observable<Article[]>{
      return this.http.get<Article[]>(`https://localhost:7185/api/Client/articles/${idClient}`)
     }
     login(loginModel:LoginModel):Observable<void>{
      return this.http.post<void>("https://localhost:7185/api/Auth/login",loginModel) 
     }     
     register(registerModel:RegisterModel):Observable<void>{
      return this.http.post<void>("https://localhost:7185/api/Client",registerModel) 
     }
}
