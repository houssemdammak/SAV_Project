import { Component } from '@angular/core';
import { ClientService } from 'src/Services/client.service';
import { ReclamationService } from 'src/Services/reclamation.service';

@Component({
  selector: 'app-mesreclamations',
  templateUrl: './mesreclamations.component.html'
})
export class MesreclamationsComponent {
  reclamations :any

  constructor(private recService:ReclamationService,private clientService:ClientService) {
    const idUser=this.clientService.getIdUser()
    this.recService.getAllReclamationsByClient(idUser).subscribe((data)=>{
      this.reclamations=data
    })
  }
}
