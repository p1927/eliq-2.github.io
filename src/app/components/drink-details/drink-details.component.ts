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
  @Input() id: string = '';
  @Input() insidePanel = false;

  drinkDetails: DrinkDetails | undefined;
  language!: WritableSignal<string>;
  isLoading = false;
  primaryColor = '';
  secondaryColor = '';
  accentColor = '';

  constructor(
    private drinkService: DrinkService,
    private configService: ConfigService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.loadDrinkDetails();
    this.loadConfigColors();
    this.language = this.configService.preferredLanguage;
  }

  private loadDrinkDetails(): void {
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
  }

  private loadConfigColors(): void {
    this.primaryColor = this.configService.primaryColor;
    this.secondaryColor = this.configService.secondaryColor;
    this.accentColor = this.configService.accentColor;
  }
}
