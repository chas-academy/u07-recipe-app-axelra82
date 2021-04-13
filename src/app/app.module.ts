// NG
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Root and route
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Components
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { ListComponent, SingleComponent } from './components/recipe/recipe.component';
import { TagsComponent } from './components/tags/tags.component';
import { SaveBtnComponent } from './components/save-btn/save-btn.component';
// Services
import { MealdbService } from './services/recipes.service';
import { SaveBtnService } from './services/save-btn.service';
// Pipes
import { TruncatePipe } from './pipes/truncate.pipe';
import { TagsPipe } from './pipes/tags.pipe';
import { UnhashPipe } from './pipes/unhash.pipe';
// Pages
import { HomeComponent } from './pages/home/home.component';
import { SavedComponent } from './pages/saved/saved.component';
// Store (a.k.a state)
import { StoreModule } from '@ngrx/store';
import { postReducer } from './reducers/recipe.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    FilterComponent,
    ListComponent,
    SingleComponent,
    TruncatePipe,
    TagsPipe,
    UnhashPipe,
    NavComponent,
    HomeComponent,
    TagsComponent,
    SavedComponent,
    SaveBtnComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ recipes: postReducer }),
  ],
  providers: [
    MealdbService,
    SaveBtnService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }