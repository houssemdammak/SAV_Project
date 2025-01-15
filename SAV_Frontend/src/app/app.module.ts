import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";

// components for views and layouts

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardBarChartComponent } from "./components/cards/card-bar-chart/card-bar-chart.component";
import { CardDoughnutChartComponent } from "./components/cards/card-doughnut-chart/card-doughnut-chart.component";
import { CardMembersComponent } from "./components/cards/card-members/card-members.component";
import { CardProfileComponent } from "./components/cards/card-profile/card-profile.component";
import { CardSettingsComponent } from "./components/cards/card-settings/card-settings.component";
import { CardEstablishmentComponent } from "./components/cards/card-establishment/card-establishment.component";
import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { IndexDropdownComponent } from "./components/dropdowns/index-dropdown/index-dropdown.component";
import { TableDropdownComponent } from "./components/dropdowns/table-dropdown/table-dropdown.component";
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { NotificationDropdownComponent } from "./components/dropdowns/notification-dropdown/notification-dropdown.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FullCalendarModule } from "@fullcalendar/angular";
import { MesArticlesComponent } from './views/mesarticles/mesarticles.component';
import { MatDialogModule } from "@angular/material/dialog";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HttpClientModule } from "@angular/common/http";
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { ReclamationsAdminComponent } from "./views/admin/reclamationsadmin/reclamationsadmin.component";
import { ArticlesComponent } from "./views/admin/articles/articles.component";
import { ReclamationModalComponent } from './components/reclamation-modal/reclamation-modal.component';
import { InterventionModalComponent } from './components/intervention-modal/intervention-modal.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TableDropdownReclamationComponent } from "./components/dropdowns/table-dropdown-reclamation/table-dropdown-reclamation.component";
import { ArticleModalComponent } from "./components/article-modal/article-modal.component";
import { PiecesComponent } from "./views/admin/pieceRechange/pieces.component";
import { MesreclamationsComponent } from './views/mesreclamations/mesreclamations.component';

@NgModule({
  declarations: [
    AppComponent,
    CardBarChartComponent,
    CardDoughnutChartComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    TableDropdownReclamationComponent,
    NotificationDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardMembersComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardEstablishmentComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    MesArticlesComponent,
    PiecesComponent,
    ReclamationsAdminComponent,ArticlesComponent, ReclamationModalComponent, InterventionModalComponent,ArticleModalComponent, MesreclamationsComponent
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,MatOptionModule,
    ReactiveFormsModule,MatFormFieldModule
    ,FullCalendarModule ,MatDialogModule,
    MatCheckboxModule,HttpClientModule,MatButtonModule,
    NgxMatTimepickerModule,MatIconModule,MatDatepickerModule
    ,MatNativeDateModule,MatInputModule,BrowserAnimationsModule,MatSelectModule
       
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
