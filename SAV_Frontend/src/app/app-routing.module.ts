import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { ReclamationsAdminComponent } from "./views/admin/reclamationsadmin/reclamationsadmin.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { MesArticlesComponent } from './views/mesarticles/mesarticles.component';
import { ArticlesComponent } from "./views/admin/articles/articles.component";
import { PiecesComponent } from "./views/admin/pieceRechange/pieces.component";
const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "piecesrechange", component: PiecesComponent },
      { path: "reclamationsadmin", component: ReclamationsAdminComponent },
      { path: "articles", component: ArticlesComponent },
      { path: "", redirectTo: "tools", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
       { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "articles", component: MesArticlesComponent },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
