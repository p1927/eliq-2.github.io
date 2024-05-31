import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  topBarConfig: any;
  styles: any;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    const config = this.configService.config;
    if (config) {
      this.topBarConfig = config.topBar;
      this.styles = config.topBar?.styles;
    }
  }
}
