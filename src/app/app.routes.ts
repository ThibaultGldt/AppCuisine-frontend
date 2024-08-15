import { Routes } from '@angular/router';
import {LandingPageComponent} from "./main/landing-page/landing-page.component";
import {SignInComponent} from "./main/sign-in/sign-in.component";

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'sign-in', component: SignInComponent}
];
