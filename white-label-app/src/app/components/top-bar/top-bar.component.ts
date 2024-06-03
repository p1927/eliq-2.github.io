import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  topBar: any;
  styles: any;

  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {
    const config = this.configService.config;
    if (config) {
      this.topBar = config.topBar;
      this.styles = config.topBar?.styles;
    }
  }
}
