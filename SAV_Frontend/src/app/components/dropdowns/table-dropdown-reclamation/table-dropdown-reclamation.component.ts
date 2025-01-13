import { Component, AfterViewInit, ViewChild, ElementRef, EventEmitter, Output } from "@angular/core";
import { createPopper } from "@popperjs/core";

@Component({
  selector: "app-table-dropdown-reclamation",
  templateUrl: "./table-dropdown-reclamation.component.html",
})
export class TableDropdownReclamationComponent implements AfterViewInit {
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef!: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  
  popoverDropdownRef!: ElementRef;
  @Output() intervention = new EventEmitter<any>(); // Pour transmettre les données d'édition
  @Output() mark = new EventEmitter<any>(); // Pour transmettre les données de suppression
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
  onMark() {
    this.mark.emit('mark'); // Émettre l'événement d'édition avec les données
    this.toggleDropdown({ preventDefault: () => {} });
  }

  onIntervention() {
    this.intervention.emit('intervention'); // Émettre l'événement de suppression avec les données
    this.toggleDropdown({ preventDefault: () => {} });
  }


}