import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Piece } from 'src/Models/Piece';

@Injectable({
  providedIn: 'root'
})
export class PieceService {

  constructor(private http:HttpClient) { }
    getAllPieces():Observable<Piece[]>{
      return this.http.get<Piece[]>('https://localhost:7185/api/Piece')
    }
  
    getPiece(id:number):Observable<Piece>{
      return this.http.get<Piece>(`https://localhost:7185/api/Piece/${id}`)
    }
}
