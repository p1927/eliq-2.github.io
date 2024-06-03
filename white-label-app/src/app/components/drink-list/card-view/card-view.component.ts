import { Component, Input } from '@angular/core';
import { Drink } from 'src/app/models/drink.model';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent {
  @Input() drinks: Drink[] = [];
  accentColor = '';
  primaryColor = '';

  gridTitleStyle: string | undefined;
  gridCardStyle: string | undefined;
  constructor(private configService: ConfigService) {
    this.accentColor = this.configService.accentColor;
    this.primaryColor = this.configService.primaryColor;
    const config = this.configService.config.drinksList;
    if (config) {
      this.gridTitleStyle = config.grid.gridTitle?.style;
      this.gridCardStyle = config.grid.gridCard?.style;
    }
  }
}
