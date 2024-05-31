import { Component, Input } from '@angular/core';
import { Drink } from 'src/app/models/drink.model';

@Component({
  selector: 'app-expansive-view',
  templateUrl: './expansive-view.component.html',
  styleUrls: ['./expansive-view.component.scss'],
})
export class ExpansiveViewComponent {
  @Input() drinks: Drink[] = [];
  constructor() {}
}
