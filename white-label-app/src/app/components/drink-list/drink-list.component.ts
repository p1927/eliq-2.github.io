import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { ConfigService } from 'src/app/services/config.service';
import { Drink } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss'],
})
export class DrinkListComponent implements OnInit {
  filteredDrinks: Drink[] = [];
  layout: string = 'card-grid';

  constructor(
    private drinkService: DrinkService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    const config = this.configService.config.drinksList;
    if (config) {
      this.layout = config.selectedLayout;
    }

    this.drinkService.getDrinks().subscribe((drinks: Drink[]) => {
      this.filteredDrinks = drinks;
    });
  }

  filterDrinks(drinks: Drink[], term: string): void {
    this.filteredDrinks = drinks.filter((drink) =>
      drink.strDrink.toLowerCase().includes(term.toLowerCase())
    );
  }
}
