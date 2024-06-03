import { Component, Input, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/drink.model';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-expansive-view',
  templateUrl: './expansive-view.component.html',
  styleUrls: ['./expansive-view.component.scss'],
})
export class ExpansiveViewComponent implements OnInit {
  @Input() drinks: Drink[] = [];
  accentColor: string = '';
  primaryColor: string = '';
  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.accentColor = this.configService.accentColor;
    this.primaryColor = this.configService.primaryColor;
  }
}
