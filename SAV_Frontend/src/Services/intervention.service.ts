import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterventionCreateModel } from 'src/Dtos/InterventionCreateModel';
import { Intervention } from 'src/Models/Intervention';

@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  constructor(private http:HttpClient) { }
    getAllInterventions():Observable<Intervention[]>{
      //type de retourne est une observable qui contient la liste des Reclamations
      return this.http.get<Intervention[]>('https://localhost:7185/api/Intervention')
    }
  
    getIntervention(id:number):Observable<Intervention>{
      return this.http.get<Intervention>(`https://localhost:7185/Intervention/${id}`)
    }
    add(intervention:InterventionCreateModel):Observable<void>{
      return this.http.post<void>('https://localhost:7185/api/Intervention',intervention)
    }
    delete(interventionId:number):Observable<void>{
      return this.http.delete<void>(`https://localhost:7185/api/Intervention/${interventionId}`)
    }
    edit(id:number,intervention:Intervention):Observable<void>{
      return this.http.put<void>(`https://localhost:7185/Intervention/${id}`,intervention)
  
    }
}
