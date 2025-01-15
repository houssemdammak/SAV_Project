import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InterventionModalComponent } from 'src/app/components/intervention-modal/intervention-modal.component';
import Swal from 'sweetalert2';
import { ReclamationService } from '../../../../Services/reclamation.service';
import { ClientService } from '../../../../Services/client.service';
import { InterventionService } from 'src/Services/intervention.service';

@Component({
  selector: 'app-reclamationsadmin',
  templateUrl: './reclamationsadmin.component.html',
})
export class ReclamationsAdminComponent {
  reclamations :any

  constructor(private dialog:MatDialog,private recService:ReclamationService,private clientService:ClientService,private inService:InterventionService) {
    this.recService.getAllReclamations().subscribe((data)=>{
      this.reclamations=data
    })
  }

  handleIntervention(eventData: any, reclamationId: any) {
    const responsableSAVId=this.clientService.getIdUser()
    const dialogRef = this.dialog.open(InterventionModalComponent);
    dialogRef.afterClosed().subscribe((piecesIds) => {
      if (piecesIds) {
        this.inService.add({responsableSAVId:responsableSAVId,reclamationId:reclamationId,pieceIds:piecesIds}).subscribe(
          ()=>{
          this.recService.getAllReclamations().subscribe((data)=>{
            this.reclamations=data
          })
        },
      )    
      }
    });
  }
  
  // Gère la suppression
  handleOnMark(eventData: any, reclamationId: any) {
    const responsableSAVId=this.clientService.getIdUser()
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
        this.recService.markCompleted(reclamationId,responsableSAVId).subscribe(
          ()=>{
          this.recService.getAllReclamations().subscribe((data)=>{
            this.reclamations=data
          })
        },
      )    
      }
    });
  
  }

open() {
throw new Error('Method not implemented.');
}

}
