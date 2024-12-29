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
 
  }
}
