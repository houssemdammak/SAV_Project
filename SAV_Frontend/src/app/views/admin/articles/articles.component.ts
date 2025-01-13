import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ArticleModalComponent } from 'src/app/components/article-modal/article-modal.component';
import { ClientService } from 'src/Services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
})
export class ArticlesComponent {
  articles:any=[
    {
      id: 1,
      nom: "Laptop",
      description: "Un ordinateur portable performant avec un processeur Intel i7.",
      dateFabrication: "2024-01-15"
    },
    {
      id: 2,
      nom: "Smartphone",
      description: "Un smartphone avec un écran AMOLED de 6.5 pouces.",
      dateFabrication: "2023-11-20"
    },
    {
      id: 3,
      nom: "Tablette",
      description: "Une tablette légère et puissante, idéale pour le travail et le divertissement.",
      dateFabrication: "2023-09-05"
    },
    {
      id: 4,
      nom: "Imprimante",
      description: "Une imprimante multifonction avec connectivité Wi-Fi.",
      dateFabrication: "2023-07-18"
    },
    {
      id: 5,
      nom: "Casque Audio",
      description: "Un casque sans fil avec réduction active de bruit.",
      dateFabrication: "2023-12-01"
    }
  ];
  constructor(private dialog:MatDialog,private clientService:ClientService) {}

addNew() {
  const dialogConfig = new MatDialogConfig();
  let dialogRef = this.dialog.open(ArticleModalComponent,dialogConfig);
      dialogRef.afterClosed().subscribe((data)=>{
        if(data){
        
        }
      })

}
handleEdit(eventData: any, article: any) {
  // console.log('Edit Event Data:', eventData);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.data = { article };
  const dialogRef = this.dialog.open(ArticleModalComponent, dialogConfig);
  dialogRef.afterClosed().subscribe((updatedTool) => {
    if (updatedTool) {
      
      
    }
  });
}

// Gère la suppression
handleDelete(eventData: any, tool: any) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this tool!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      
    }
  });

}
open() {
throw new Error('Method not implemented.');
}

}
