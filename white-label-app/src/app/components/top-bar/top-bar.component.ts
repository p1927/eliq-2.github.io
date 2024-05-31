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
    const topBar = this.configService.config?.topBar;
    this.topBarConfig = topBar;
    this.styles = topBar?.styles;
  }
}
