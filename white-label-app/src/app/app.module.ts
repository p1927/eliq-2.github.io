import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';
import { CardViewComponent } from './components/drink-list/card-view/card-view.component';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { ExpansiveViewComponent } from './components/drink-list/expansive-view/expansive-view.component';
import { InstagramViewComponent } from './components/drink-list/instagram-view/instagram-view.component';
import { DrinksContainerComponent } from './components/drinks-container/drinks-container.component';
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
    DrinksContainerComponent,
    LanguageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatGridListModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [DrinkService, ConfigService, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
