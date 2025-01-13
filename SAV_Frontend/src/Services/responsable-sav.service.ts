import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/Dtos/LoginModel';
import { RegisterModel } from 'src/Dtos/RegisterModel';
import { ResponsableSAVModel } from 'src/Dtos/ResponsableSAVCreateModel';
import { ResponsableSAV } from 'src/Models/ResponsableSAV';

@Injectable({
  providedIn: 'root'
})
export class ResponsableSAVService {

 constructor(private http:HttpClient) {
 
    }
      getResps():Observable<ResponsableSAV[]>{
        //type de retourne est une observable qui contient la liste des members
        return this.http.get<ResponsableSAV[]>('https://localhost:7185/api/Responsable')
      }
      getResp(id:number):Observable<ResponsableSAV>{
        //type de retourne est une observable qui contient la liste des members
        return this.http.get<ResponsableSAV>(`https://localhost:7185/api/Responsable/${id}`)
      }   
      register(ResponsableSAVregister:ResponsableSAVModel):Observable<void>{
       return this.http.post<void>("https://localhost:7185/api/Responsable",ResponsableSAVregister) 
      }
      login(loginModel:LoginModel):Observable<void>{
        return this.http.post<void>("https://localhost:7185/api/Auth/login",loginModel) 
       } 
}
