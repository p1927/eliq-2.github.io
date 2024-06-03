import { Component, Input, OnInit, WritableSignal } from '@angular/core';
import { interval } from 'rxjs';
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

  constructor(
    private drinkService: DrinkService,
    private config: ConfigService
  ) {}

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      console.log(this.language());
    });
    this.drinkService
      .getDrinkDetails(this.id)
      .subscribe((details: DrinkDetails) => {
        this.drinkDetails = details;
      });

    this.language = this.config.preferredLanguage;
  }
}
