import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingleComponent } from './components/recipe/recipe.component';
import { HomeComponent } from './pages/home/home.component';
import { SavedComponent } from './pages/saved/saved.component';

const routes: Routes = [
  {
    path: 'recipe/:id',
    component: SingleComponent
  },
  {
    path: 'saved',
    component: SavedComponent
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
