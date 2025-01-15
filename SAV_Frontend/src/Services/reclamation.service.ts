import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReclamationAdditionDto } from 'src/Dtos/ReclamationAdditionDto';
import { Reclamation } from 'src/Models/Reclamation';
@Injectable({
  providedIn: 'root' 
})
export class ReclamationService {
//fonction crud sur member
  constructor(private http:HttpClient) { }
  getAllReclamations():Observable<Reclamation[]>{
    //type de retourne est une observable qui contient la liste des Reclamations
    return this.http.get<Reclamation[]>('https://localhost:7185/api/Reclamation')
  }
  getAllReclamationsByClient(clientid:number):Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(`https://localhost:7185/api/Reclamation/ClientReclamations/${clientid}`)
  }
  getReclamation(id:number):Observable<Reclamation>{
    //type de retourne est une observable qui contient la liste des Reclamations
    return this.http.get<Reclamation>(`https://localhost:7185/Reclamation/${id}`)
  }
  add(Reclamation:ReclamationAdditionDto):Observable<void>{
    return this.http.post<void>('https://localhost:7185/api/Reclamation',Reclamation)
  }
  delete(ReclamationId:number):Observable<void>{
    return this.http.delete<void>(`https://localhost:7185/api/Reclamation/${ReclamationId}`)
  }
  edit(id:number,Reclamation:Reclamation):Observable<void>{
    return this.http.put<void>(`https://localhost:7185/Reclamation/${id}`,Reclamation)
  }
  markCompleted(reclamationId:number,responsableSAVId: number ):Observable<void>{
    return this.http.post<void>(`https://localhost:7185/api/Reclamation/MarkCompleted/${reclamationId}/${responsableSAVId}`,null)
  }
}
