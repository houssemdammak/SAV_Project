import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { ClientService } from "src/Services/client.service";

@Component({
  selector: "app-admin-navbar",
  templateUrl: "./admin-navbar.component.html",
})
export class AdminNavbarComponent implements OnInit {
  currentUrl: string = '';
  constructor(private router: Router,private clientService:ClientService) {}

  ngOnInit(): void {
    // Écouter les changements de navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects.split("/")[2];
      }
    });
  }
  logout():void{
    this.clientService.logout()
  }
}
