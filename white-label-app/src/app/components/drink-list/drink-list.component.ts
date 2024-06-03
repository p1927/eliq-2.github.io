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
  private subscription: Subscription | undefined;
  drinks: Drink[] = [];
  filteredDrinks: Drink[] = [];
  layout: string = 'grid';

  constructor(
    private drinkService: DrinkService,
    private configService: ConfigService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadConfig();
    this.loadDrinks();
    this.subscribeToFilter();
  }

  private loadConfig(): void {
    const drinksListConfig = this.configService.config.drinksList;
    if (drinksListConfig) {
      this.layout = drinksListConfig.selectedLayout;
    }
  }

  private loadDrinks(): void {
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
  }

  private subscribeToFilter(): void {
    this.subscription = this.drinkService.filterOn.subscribe(
      (value: string) => {
        this.filterDrinks(value);
      }
    );
  }

  private filterDrinks(term: string): void {
    const lowerCaseTerm = term.toLowerCase();
    this.filteredDrinks = this.drinks.filter((drink) =>
      drink.strDrink.toLowerCase().includes(lowerCaseTerm)
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
