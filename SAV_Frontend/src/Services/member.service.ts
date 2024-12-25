import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/Models/Memeber';
// decorateur permet au service d'etre injecter ou utiliser par des autre services et composante 
@Injectable({
  providedIn: 'root' //etre disponible pour tout les composant du route 
})
export class MemberService {
//fonction crud sur member
  constructor(private http:HttpClient) { }
  getAllMembers():Observable<Member[]>{
    //type de retourne est une observable qui contient la liste des members
    return this.http.get<Member[]>('http://localhost:3000/members')
  }
  getMember(id:String):Observable<Member>{
    //type de retourne est une observable qui contient la liste des members
    return this.http.get<Member>(`http://localhost:3000/members/${id}`)
  }
  add(member:Member):Observable<void>{
    return this.http.post<void>('http://localhost:3000/members',member)
  }
  delete(memberId:string):Observable<void>{
    return this.http.delete<void>(`http://localhost:3000/members/${memberId}`)
  }
  edit(id:string,member:Member):Observable<void>{
    return this.http.put<void>(`http://localhost:3000/members/${id}`,member)

  }
}
