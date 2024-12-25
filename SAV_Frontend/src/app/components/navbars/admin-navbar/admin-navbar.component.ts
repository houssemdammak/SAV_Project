import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-admin-navbar",
  templateUrl: "./admin-navbar.component.html",
})
export class AdminNavbarComponent implements OnInit {
  currentUrl: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Écouter les changements de navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects.split("/")[2];
      }
    });
  }
}
