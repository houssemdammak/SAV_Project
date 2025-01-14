import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Article } from 'src/Models/Article';
import { Client } from 'src/Models/Client';
import { LoginModel } from 'src/Dtos/LoginModel';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private tokenSubject = new BehaviorSubject<string | null>(null);
  private idUserSubject = new BehaviorSubject<number >(0);

  private userTypeSubject = new BehaviorSubject<string | null>('Client'); // Par défaut "Client"
  constructor(private http:HttpClient) {
      // Initialiser les valeurs depuis le stockage local
      const token = localStorage.getItem('token');
      const userType = localStorage.getItem('userType');
      const userID = localStorage.getItem('userID');

      if (token) {
        this.tokenSubject.next(token);
      }
      if (userType) {
        this.userTypeSubject.next(userType);
      }
      if (userID) {
        this.idUserSubject.next(Number(userID));
      }
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
    //  login(loginModel:LoginModel):Observable<void>{
    //   return this.http.post<void>("https://localhost:7185/api/Auth/login",loginModel) 
    //  }     
    //  register(registerModel:RegisterModel):Observable<void>{
    //   return this.http.post<void>("https://localhost:7185/api/Client",registerModel) 
    //  }
     login(loginModel: LoginModel): Observable<{ token: string; userType: string,userID:number }> {
      return this.http.post<{ token: string; userType: string,userID:number }>("https://localhost:7185/api/Auth/login", loginModel).pipe(
        tap((response) => {
          this.saveTokenAnduserType(response.token, response.userType,response.userID);
          // console.log(this.idUserSubject.getValue())
        })
      );
    }
  
    register(registerModel: any): Observable<void> {
      return this.http.post<void>("https://localhost:7185/api/Client", registerModel)
    }
  
    logout(): void {
      localStorage.removeItem('token');
      localStorage.removeItem('userType');
      localStorage.removeItem('userID');
      this.tokenSubject.next(null);
      this.userTypeSubject.next(null);
      this.idUserSubject.next(0)
    }
  
    getToken(): string | null {
      return this.tokenSubject.getValue();
    }
    getIdUser(): number {
      console.log(this.idUserSubject.getValue())
      return this.idUserSubject.getValue();
    }
    getuserType(): string {
      return this.userTypeSubject.getValue() || 'ResponsableSAV';
    }
  
    isAuthenticated(): boolean {
      return !!this.getToken();
    }
  
    private saveTokenAnduserType(token: string, userType: string,userID:number): void {
      localStorage.setItem('token', token);
      localStorage.setItem('userType', userType);
      localStorage.setItem('userID', userID.toString());

      this.tokenSubject.next(token);
      this.userTypeSubject.next(userType);
      this.idUserSubject.next(userID);

    }
}
