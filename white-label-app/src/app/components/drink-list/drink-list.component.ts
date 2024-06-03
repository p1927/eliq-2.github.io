import { Component, OnDestroy, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, of, Subscription } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';
import { Drink } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss'],
})
export class DrinkListComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined;
  drinks: Drink[] = [];
  filteredDrinks: Drink[] = [];
  layout: string = 'card-grid';

  constructor(
    private drinkService: DrinkService,
    private configService: ConfigService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const config = this.configService.config.drinksList;
    if (config) {
      this.layout = config.selectedLayout;
    }

    this.drinkService
      .getDrinks()
      .pipe(
        catchError(() => {
          this.snackBar.open('Request failed', 'OK');
          return of([]);
        })
      )
      .subscribe((drinks: Drink[]) => {
        this.drinks = drinks;
        this.filteredDrinks = drinks;
      });
    this.subscription = this.drinkService.filterOn.subscribe((value) => {
      this.filterDrinks(this.drinks, value);
    });
  }

  filterDrinks(drinks: Drink[], term: string): void {
    this.filteredDrinks = drinks.filter((drink) =>
      drink.strDrink.toLowerCase().includes(term.toLowerCase())
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
