import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { ClientService } from 'src/Services/client.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private clientService: ClientService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole = this.clientService.getuserType(); // Récupère le type de l'utilisateur
    const expectedRole = route.data['role']; // Récupère le rôle attendu des données de la route

    if (userRole === 'ResponsableSAV') {
      this.router.navigate(['/admin']);
      // Si l'utilisateur est ResponsableSAV, il a accès à toutes les routes non spécifiques
      return true;
    } else if (userRole === 'Client' && expectedRole === 'Client') {
      // Si l'utilisateur est Client et que la route attend un rôle Client
      this.router.navigate(['/']);
      return true;
    }

    // Redirige vers une page par défaut si l'utilisateur n'a pas les droits
    this.router.navigate(['/auth']);
    return false;
  }
}
