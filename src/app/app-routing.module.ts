import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent, SigninComponent, ProfileComponent } from './components/auth/auth.component';
import { SingleComponent } from './components/recipe/recipe.component';
import { HomeComponent } from './pages/home/home.component';
import { SavedComponent } from './pages/saved/saved.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'recipe/:id',
    component: SingleComponent
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
