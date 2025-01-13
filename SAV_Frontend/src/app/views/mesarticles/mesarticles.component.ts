import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReclamationModalComponent } from 'src/app/components/reclamation-modal/reclamation-modal.component';
import { ClientService } from 'src/Services/client.service';

@Component({
  selector: 'app-mesarticles',
  templateUrl: './mesarticles.component.html',
})
export class MesArticlesComponent {
  cards = [
    {
      id:'1',
      title: 'Article 1',
      description: 'Description for Article 1',
      imgUrl:
        '../../../assets/img/product.jpg',
      bgColor: 'bg-red-600',
    },
    {
      id:'2',
      title: 'Article 1',
      description: 'Description for Article 1',
      imgUrl:
        '../../../assets/img/product.jpg',
      bgColor: 'bg-red-600',
    }, {
      id:'3',
      title: 'Article 1',
      description: 'Description for Article 1',
      imgUrl:
        '../../../assets/img/product.jpg',
      bgColor: 'bg-red-600',
    }, {
      id:'4',
      title: 'Article 1',
      description: 'Description for Article 1',
      imgUrl:
        '../../../assets/img/product.jpg',
      bgColor: 'bg-red-600',
    } 
  ];

  constructor(private dialog:MatDialog,private clientService:ClientService){
    // this.clientService.getAllClients().subscribe((data)=>{
    //   console.log("data : ", data)
    // })
  
  }
  addNewReclamation(articleId:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data={articleId}
    let dialogRef = this.dialog.open(ReclamationModalComponent,dialogConfig);
        dialogRef.afterClosed().subscribe((data)=>{
          if(data){
            
          }
        })
  }
}
