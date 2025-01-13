import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InterventionModalComponent } from 'src/app/components/intervention-modal/intervention-modal.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reclamationsadmin',
  templateUrl: './reclamationsadmin.component.html',
})
export class ReclamationsAdminComponent {
  reclamations = [
    {
      id: 1,
      dateReclamation: new Date("2024-01-10"),
      description: "Produit défectueux à la livraison.",
      clientId: 101,
      articleId: 201,
      statutReclamationId: 1,
      statutReclamation: { id: 1, libelle: "En cours de traitement" }
    },
    {
      id: 2,
      dateReclamation: new Date("2024-01-12"),
      description: "Accessoire manquant dans l'emballage.",
      clientId: 102,
      articleId: 202,
      statutReclamationId: 2,
      statutReclamation: { id: 2, libelle: "Résolu" }
    },
    {
      id: 3,
      dateReclamation: new Date("2024-01-15"),
      description: "Produit reçu ne correspond pas à la commande.",
      clientId: 103,
      articleId: 203,
      statutReclamationId: 1,
      statutReclamation: { id: 1, libelle: "En cours de traitement" }
    },
    {
      id: 4,
      dateReclamation: new Date("2024-01-18"),
      description: "Produit endommagé après quelques jours d'utilisation.",
      clientId: 104,
      articleId: 204,
      statutReclamationId: 3,
      statutReclamation: { id: 3, libelle: "Refusé" }
    },
    {
      id: 5,
      dateReclamation: new Date("2024-01-20"),
      description: "Produit non livré après la date estimée.",
      clientId: 105,
      articleId: 205,
      statutReclamationId: 1,
      statutReclamation: { id: 1, libelle: "En cours de traitement" }
    }
  ];
  
  constructor(private dialog:MatDialog) {}

  handleIntervention(eventData: any, article: any) {
    console.log('Data:', eventData);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { article };
    const dialogRef = this.dialog.open(InterventionModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((updatedTool) => {
      if (updatedTool) {
        
        
      }
    });
  }
  
  // Gère la suppression
  handleOnMark(eventData: any, tool: any) {
    Swal.fire({
      title: "Êtes-vous sûr de vouloir marquer comme terminé ?",
      text: "Vous ne pourrez pas annuler cette action !",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, marquez !"
    }).then((result) => {
      if (result.isConfirmed) {
        
      }
    });
  
  }

open() {
throw new Error('Method not implemented.');
}

}
