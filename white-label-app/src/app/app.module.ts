import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatExpansionModule,
  MatGridListModule,
  MatSelectModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';
import { CardViewComponent } from './components/drink-list/card-view/card-view.component';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { ExpansiveViewComponent } from './components/drink-list/expansive-view/expansive-view.component';
import { InstagramViewComponent } from './components/drink-list/instagram-view/instagram-view.component';
import { DrinksContainerComponent } from './components/drinks-container/drinks-container.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ConfigService } from './services/config.service';
import { DrinkService } from './services/drink.service';
import { LanguageComponent } from './components/language/language.component';

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
    DrinksContainerComponent,
    LanguageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    MatSelectModule,
    MatGridListModule,
    AppRoutingModule,
  ],
  providers: [DrinkService, ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
