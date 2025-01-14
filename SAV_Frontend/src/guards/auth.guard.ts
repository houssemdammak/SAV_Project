import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ClientService } from '../Services/client.service';

export const authGuard: CanActivateFn = (route, state) => {
  const clientService = inject(ClientService);
  const router = inject(Router);

  const userType = clientService.getuserType();
  const allowedRoles = route.data?.['roles'];

  if (allowedRoles?.includes(userType)) {
    
    return true;
  }

  // Rediriger l'utilisateur en cas d'accès non autorisé
  router.navigate(['/auth/login']);
  return false;
};
