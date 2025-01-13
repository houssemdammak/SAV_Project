import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from 'src/Models/Reclamation';
// decorateur permet au service d'etre injecter ou utiliser par des autre services et composante 
@Injectable({
  providedIn: 'root' //etre disponible pour tout les composant du route 
})
export class MemberService {
//fonction crud sur member
  constructor(private http:HttpClient) { }
  getAllMembers():Observable<Reclamation[]>{
    //type de retourne est une observable qui contient la liste des Reclamations
    return this.http.get<Reclamation[]>('http://localhost:3000/Reclamations')
  }
  getReclamation(id:String):Observable<Reclamation>{
    //type de retourne est une observable qui contient la liste des Reclamations
    return this.http.get<Reclamation>(`http://localhost:3000/Reclamations/${id}`)
  }
  add(Reclamation:Reclamation):Observable<void>{
    return this.http.post<void>('http://localhost:3000/Reclamations',Reclamation)
  }
  delete(ReclamationId:string):Observable<void>{
    return this.http.delete<void>(`http://localhost:3000/Reclamations/${ReclamationId}`)
  }
  edit(id:string,Reclamation:Reclamation):Observable<void>{
    return this.http.put<void>(`http://localhost:3000/Reclamations/${id}`,Reclamation)

  }
}
