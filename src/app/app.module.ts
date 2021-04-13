// Native
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Route
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { ListComponent, SingleComponent } from './components/recipe/recipe.component';
// Pages
import { HomeComponent } from './pages/home/home.component';
import { SavedComponent } from './pages/saved/saved.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SingleComponent,
    HomeComponent,
    SavedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
