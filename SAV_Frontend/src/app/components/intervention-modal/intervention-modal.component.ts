import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-intervention-modal',
  templateUrl: './intervention-modal.component.html',
})
export class InterventionModalComponent {
    pieceForm: FormGroup;
    piecesList: string[] = ['Pièce 1', 'Pièce 2', 'Pièce 3', 'Pièce 4']; // Liste statique
    pieces = new FormControl<string[] | undefined>([]);

    constructor(private fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any) {
      this.pieceForm = this.fb.group({
        pieces: [[]], // Tableau pour permettre la sélection multiple
        description: [''] // Champ optionnel
      });
    }
  
    valider(): void {
      if (this.pieceForm.valid) {
        console.log('Formulaire soumis:', this.pieceForm.value);
        // Traitez les données ici
      }
    }
    
  

}
