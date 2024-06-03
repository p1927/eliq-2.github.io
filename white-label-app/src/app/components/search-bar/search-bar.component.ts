import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  subscription: Subscription | undefined;
  accentColor: string = '';

  constructor(
    private drinkService: DrinkService,
    private configService: ConfigService
  ) {
    this.searchForm = new FormGroup({
      searchTerm: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.accentColor = this.configService.accentColor;
    this.subscription = this.searchForm
      .get('searchTerm')
      ?.valueChanges.subscribe((value) => {
        this.drinkService.filterOn.next(value);
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
