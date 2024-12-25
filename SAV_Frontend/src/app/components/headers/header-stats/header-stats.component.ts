import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-header-stats",
  templateUrl: "./header-stats.component.html",
})
export class HeaderStatsComponent implements OnInit {
  currentUrl !: string ;
  iDashboardPage=false
  constructor(private router: Router, private activeRoute:ActivatedRoute ) {}

  ngOnInit(): void {
    // Écouter les changements de navigation
    console.log(this.activeRoute.snapshot.children[0].routeConfig?.path)
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.currentUrl = event.urlAfterRedirects;
    //     this.iDashboardPage= this.currentUrl=="/admin/dashboard" 
    //   }
    // });
    const link=this.activeRoute.snapshot.children[0].routeConfig?.path
    this.iDashboardPage= link=="dashboard"
    if(link){
      this.currentUrl=link
      console.log(this.currentUrl)
    }
  }
}
