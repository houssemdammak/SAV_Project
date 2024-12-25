import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-table",
  templateUrl: "./card-table.component.html",
})
export class CardTableComponent implements OnInit {
open() {
throw new Error('Method not implemented.');
}
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  @Input()
  get type():string{
    return this.typeMember 
  } 
  set type(type: string) {
    this.typeMember = type;
  }
  private _color = "light";
  typeMember="" ;
  constructor() {}

  ngOnInit(): void {}
}
