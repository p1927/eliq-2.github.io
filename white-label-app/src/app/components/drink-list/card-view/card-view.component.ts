import { Component, Input, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/drink.model';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {
  @Input() drinks: Drink[] = [];
  accentColor: string = '';
  primaryColor: string = '';
  gridTitleStyle: string | undefined;
  gridCardStyle: string | undefined;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.accentColor = this.configService.accentColor;
    this.primaryColor = this.configService.primaryColor;
    this.loadGridStyles();
  }

  private loadGridStyles(): void {
    const config = this.configService.config.drinksList;
    if (config?.grid) {
      this.gridTitleStyle = config.grid.gridTitle?.style;
      this.gridCardStyle = config.grid.gridCard?.style;
    }
  }
}
