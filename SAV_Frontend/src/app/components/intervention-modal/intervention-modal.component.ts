import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Piece } from 'src/Models/Piece';
import { PieceService } from 'src/Services/piece.service';

@Component({
  selector: 'app-intervention-modal',
  templateUrl: './intervention-modal.component.html',
})
export class InterventionModalComponent {
  // pieceForm: FormGroup;
  // piecesList: Piece[] = [
  //   new Piece(1, 'Pièce 1', 'Description 1', 20, 50),
  //   new Piece(2, 'Pièce 2', 'Description 2', 30, 30),
  //   new Piece(3, 'Pièce 3', 'Description 3', 40, 10),
  //   new Piece(4, 'Pièce 4', 'Description 4', 50, 5),
  //   new Piece(5, 'Pièce 5', 'Description 5', 60, 100),
  //   new Piece(6, 'Pièce 1', 'Description 1', 20, 50),
  //   new Piece(7, 'Pièce 2', 'Description 2', 30, 30),
  //   new Piece(8, 'Pièce 3', 'Description 3', 40, 10),
  //   new Piece(9, 'Pièce 4', 'Description 4', 50, 5),
  //   new Piece(10, 'Pièce 5', 'Description 5', 60, 100),
  // ];
  selectedPieces: number[] = [];
  piecesList: Piece[]=[] 
  modalErreur=''
  constructor(public dialogRef: MatDialogRef<InterventionModalComponent>, private fb: FormBuilder,private pieceService:PieceService) {
    this.pieceService.getAllPieces().subscribe((data)=>{
      this.piecesList=data 
    })

  }

  onPieceSelect(piece: Piece): void {
    // Vérifier si l'ID de la pièce est déjà dans la liste
    const index = this.selectedPieces.indexOf(piece.id);
  
    if (index === -1) {
      // Ajouter l'ID de la pièce s'il n'est pas déjà dans la liste
      this.selectedPieces.push(piece.id);
      this.modalErreur = ''; // Réinitialiser le message d'erreur
    } else {
      // Retirer l'ID de la pièce s'il est déjà dans la liste
      this.selectedPieces.splice(index, 1);
    }
  
    // Optionnel : Valider l'état après modification
    if (this.selectedPieces.length === 0) {
      this.modalErreur = 'Veuillez sélectionner au moins une pièce.';
    }
  }

  valider(): void {
    if (this.selectedPieces.length>0) {
      this.modalErreur=''
      this;this.dialogRef.close(this.selectedPieces)
    }
    
  }
    
  

}
