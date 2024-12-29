import { Component, AfterViewInit, ViewChild, ElementRef, EventEmitter, Output } from "@angular/core";
import { createPopper } from "@popperjs/core";

@Component({
  selector: "app-table-dropdown",
  templateUrl: "./table-dropdown.component.html",
})
export class TableDropdownComponent implements AfterViewInit {
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef!: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  
  popoverDropdownRef!: ElementRef;
  @Output() edit = new EventEmitter<any>(); // Pour transmettre les données d'édition
  @Output() delete = new EventEmitter<any>(); // Pour transmettre les données de suppression
  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
  toggleDropdown(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.dropdownPopoverShow = !this.dropdownPopoverShow;
  }

  // Méthodes pour émettre les événements
  onIntervention() {
    this.edit.emit('edit'); // Émettre l'événement d'édition avec les données
    this.toggleDropdown({ preventDefault: () => {} });
  }

  onMark() {
    this.delete.emit('delete'); // Émettre l'événement de suppression avec les données
    this.toggleDropdown({ preventDefault: () => {} });
  }

}