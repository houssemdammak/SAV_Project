import { Component } from '@angular/core';
import { PieceService } from 'src/Services/piece.service';

@Component({
  selector: 'app-articles',
  templateUrl: './pieces.component.html',
})
export class PiecesComponent {
  pieces: any[]=[] 
  constructor(private pieceService:PieceService) {
    this.pieceService.getAllPieces().subscribe((data)=>{
      this.pieces=data 
    })
  }
}
