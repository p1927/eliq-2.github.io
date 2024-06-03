import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';
import { CardViewComponent } from './components/drink-list/card-view/card-view.component';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { ExpansiveViewComponent } from './components/drink-list/expansive-view/expansive-view.component';
import { InstagramViewComponent } from './components/drink-list/instagram-view/instagram-view.component';
import { LanguageComponent } from './components/language/language.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ConfigService } from './services/config.service';
import { DrinkService } from './services/drink.service';

@NgModule({
  declarations: [
    AppComponent,
    DrinkListComponent,
    DrinkDetailsComponent,
    TopBarComponent,
    SearchBarComponent,
    InstagramViewComponent,
    ExpansiveViewComponent,
    CardViewComponent,
    LanguageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    DrinkService,
    ConfigService,
    provideAnimationsAsync(),
    provideRouter(routes, withComponentInputBinding()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
