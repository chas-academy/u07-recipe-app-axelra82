// NG
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Root and route
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Components
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { ListComponent, SingleComponent } from './components/recipe/recipe';
import { TagsComponent } from './components/tags/tags.component';
import { SaveBtnComponent } from './components/save-btn/save-btn.component';
// Services
import { MealdbService } from './services/recipes.service';
import { SaveBtnService } from './services/save-btn.service';
// Pipes
import { TagsPipe, TruncatePipe, UnhashPipe, ParsePipe } from './pipes/pipes';
// Pages
import { HomeComponent } from './pages/home/home.component';
// Store (a.k.a state)
import { StoreModule } from '@ngrx/store';
import { postReducer } from './reducers/recipe.reducer';
import { SigninComponent, SignupComponent, ProfileComponent, RecipeListComponent } from './components/auth/auth';
// Auth
import { AuthInterceptor } from './components/auth/shared/auth.interceptor';

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
    ParsePipe,
    NavComponent,
    HomeComponent,
    TagsComponent,
    SaveBtnComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    RecipeListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ recipes: postReducer }),
  ],
  providers: [
    MealdbService,
    SaveBtnService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }