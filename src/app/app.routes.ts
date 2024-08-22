import {Routes} from '@angular/router';
import {LandingPageComponent} from "./main/landing-page/landing-page.component";
import {SignInComponent} from "./main/auth/sign-in/sign-in.component";
import {authGuard} from "./config/auth.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: LandingPageComponent,
    canActivate: [authGuard]
  }, {
    path: 'sign-in',
    component: SignInComponent
  }
];
