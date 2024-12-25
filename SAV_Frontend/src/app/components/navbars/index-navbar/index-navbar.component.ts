import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index-navbar",
  templateUrl: "./index-navbar.component.html",
})
export class IndexNavbarComponent implements OnInit {
  navbarOpen = false;
  isMember=true
  constructor() {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
  setDropDownVisible(){
    this.isMember = !this.isMember;

  }
}
