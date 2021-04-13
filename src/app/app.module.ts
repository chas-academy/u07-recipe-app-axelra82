// Native NG
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Route
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { ListComponent, SingleComponent } from './components/recipe/recipe.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
// Pages
import { HomeComponent } from './pages/home/home.component';
import { SavedComponent } from './pages/saved/saved.component';
// Store (a.k.a state)
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    ListComponent,
    SingleComponent,
    HomeComponent,
    SavedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
