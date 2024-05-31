import { Component, Input } from '@angular/core';
import { Drink } from 'src/app/models/drink.model';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent {
  @Input() drinks: Drink[] = [];
  constructor() {}
}
