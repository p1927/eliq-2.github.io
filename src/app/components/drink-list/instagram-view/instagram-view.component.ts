import { Component, Input } from '@angular/core';
import { Drink } from 'src/app/models/drink.model';

@Component({
  selector: 'app-instagram-view',
  templateUrl: './instagram-view.component.html',
  styleUrls: ['./instagram-view.component.scss'],
})
export class InstagramViewComponent {
  @Input() drinks: Drink[] = [];
  constructor() {}
}
