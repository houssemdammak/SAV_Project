import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
export class Piece {
  constructor(
    public Id: number,
    public Nom: string,
    public Description: string,
    public Prix: number,
    public Stock: number
  ) {}
}
@Component({
  selector: 'app-intervention-modal',
  templateUrl: './intervention-modal.component.html',
})
export class InterventionModalComponent {
  pieceForm: FormGroup;
  piecesList: Piece[] = [
    new Piece(1, 'Pièce 1', 'Description 1', 20, 50),
    new Piece(2, 'Pièce 2', 'Description 2', 30, 30),
    new Piece(3, 'Pièce 3', 'Description 3', 40, 10),
    new Piece(4, 'Pièce 4', 'Description 4', 50, 5),
    new Piece(5, 'Pièce 5', 'Description 5', 60, 100),
    new Piece(6, 'Pièce 1', 'Description 1', 20, 50),
    new Piece(7, 'Pièce 2', 'Description 2', 30, 30),
    new Piece(8, 'Pièce 3', 'Description 3', 40, 10),
    new Piece(9, 'Pièce 4', 'Description 4', 50, 5),
    new Piece(10, 'Pièce 5', 'Description 5', 60, 100),
  ];
  selectedPieces: Piece[] = [];

  constructor(private fb: FormBuilder) {
    this.pieceForm = this.fb.group({
      pieces: new FormControl([]), // Contrôle pour les pièces sélectionnées
    });
  }

  onPieceSelect(piece: Piece): void {
    // Ajouter ou retirer la pièce sélectionnée
    const index = this.selectedPieces.findIndex((p) => p.Id === piece.Id);
    if (index === -1) {
      this.selectedPieces.push(piece);
    } else {
      this.selectedPieces.splice(index, 1);
    }
  }

  valider(): void {
    console.log('Pièces sélectionnées:', this.selectedPieces);
    if (this.pieceForm.valid) {
      // Traitez les données ici
      console.log('Formulaire soumis:', this.pieceForm.value);
    }
  }
    
  

}
