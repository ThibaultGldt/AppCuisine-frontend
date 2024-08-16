import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authenticated = inject(AuthService).isLoggedIn();

  if (authenticated) {
    return true;
  }

  router
    .navigate(["/sign-in"])
    .then();
  return true;
};
