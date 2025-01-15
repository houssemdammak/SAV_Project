import { Component,ChangeDetectorRef , OnInit, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { ClientService } from '../../../../Services/client.service';
import { NotificationService } from "src/Services/notification.service";
import { NotificationClient } from "src/Models/NotificationClient";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: "app-index-navbar",
  templateUrl: "./index-navbar.component.html",

})
export class IndexNavbarComponent implements OnInit {
  navbarOpen = false;
  dropdownPopoverShow = false;
  @ViewChild("popoverDropdownRef", { static: false })
  notifications:NotificationClient[]=[]
  isClient:Boolean=true
  unreadCount: number = 0;
  notifications$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private clientService:ClientService,private notifService:NotificationService) { }
  ngOnInit(): void {
    if (this.clientService.getuserType() === 'ResponsableSAV') {
      this.isClient=false
    } 
    const userId=this.clientService.getIdUser()
    this.notifService.getNotificationCLient(userId).subscribe((data)=>{
      this.notifications=data
      this.notifications$.next(data);
      this.updateUnreadCount();
    })
  }
  updateUnreadCount(): void {
    this.unreadCount = this.notifications.filter((notif) => !notif.isRead).length;
  }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
  logout():void{
    this.clientService.logout()
  }
  setDropDownVisible(){

  }
  toggleDropdown(event: { preventDefault: () => void; }) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
      this.dropdownPopoverShow = true;
      if (Array.isArray(this.notifications)) {
        const unreadNotificationIds: number[] = this.notifications
        .filter((notif) => !notif.isRead)
        .map((notif) => notif.notificationClientId);
        if(unreadNotificationIds.length>0){
          this.notifService.markAsRead(unreadNotificationIds).subscribe({
            next: () => {
              this.notifications.forEach((notif) => {
                if (!notif.isRead) {
                  notif.isRead = true;
                }
              });
              this.updateUnreadCount();
            },
            
          });
        }
      }
    }
  }
}
