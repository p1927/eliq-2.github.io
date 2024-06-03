import { Component, OnInit } from '@angular/core';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  secondaryColor: string = '';
  constructor(public configService: ConfigService) {}
  ngOnInit(): void {
    this.configService.initializeConfig();
    this.secondaryColor = this.configService.secondaryColor;
  }
}
