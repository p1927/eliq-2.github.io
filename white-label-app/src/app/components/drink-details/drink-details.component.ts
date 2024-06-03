import { Component, Input, OnInit, WritableSignal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, of } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';
import { DrinkDetails } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss'],
})
export class DrinkDetailsComponent implements OnInit {
  drinkDetails: DrinkDetails | undefined;
  @Input() id: string = '';
  @Input() insidePanel = false;
  language!: WritableSignal<string>;
  isLoading: boolean = false;
  primaryColor: string = '';
  secondaryColor: string = '';
  accentColor: string = '';

  constructor(
    private drinkService: DrinkService,
    private config: ConfigService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.drinkService
      .getDrinkDetails(this.id)
      .pipe(
        catchError(() => {
          this.snackBar.open('Request failed', 'OK');
          return of({} as DrinkDetails);
        })
      )
      .subscribe((details: DrinkDetails) => {
        this.drinkDetails = details;
        this.isLoading = false;
      });

    this.language = this.config.preferredLanguage;
    this.primaryColor = this.config.primaryColor;
    this.secondaryColor = this.config.secondaryColor;
    this.accentColor = this.config.accentColor;
  }
}
