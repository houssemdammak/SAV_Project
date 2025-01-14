import { Component, OnInit } from "@angular/core";
import { ClientService } from '../../../../Services/client.service';

@Component({
  selector: "app-index-navbar",
  templateUrl: "./index-navbar.component.html",
})
export class IndexNavbarComponent implements OnInit {
  navbarOpen = false;
  isClient:Boolean=true
  constructor(private clientService:ClientService) {}

  ngOnInit(): void {
    if (this.clientService.getuserType() === 'ResponsableSAV') {
      this.isClient=false
    } 
  }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
  logout():void{
    this.clientService.logout()
  }
  setDropDownVisible(){

  }
}
