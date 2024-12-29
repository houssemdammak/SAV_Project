import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InterventionModalComponent } from 'src/app/components/intervention-modal/intervention-modal.component';

@Component({
  selector: 'app-reclamationsadmin',
  templateUrl: './reclamationsadmin.component.html',
})
export class ReclamationsAdminComponent {
  
  constructor(private dialog:MatDialog) {}

  handleEdit(eventData: any) {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(InterventionModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
 
    });

    console.log("edit te5dem")
  }

  // Gère la suppression
  handleDelete(eventData: any) {
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this publication!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!"
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     this.pubService.delete(pub.id).subscribe(() => {
    //           this.pubs = this.pubs.filter((p: { id: any; }) => p.id !== pub.id);
    //     });
    //   }
    // });
    console.log("delete te5dem")

  }

open() {
throw new Error('Method not implemented.');
}

}
