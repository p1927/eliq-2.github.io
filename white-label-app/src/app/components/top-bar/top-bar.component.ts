import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit, OnDestroy {
  topBar: any;
  styles: any;
  showSearchBar = true;
  showLanguageSelection = true;
  subscription!: Subscription;
  primaryColor: string = '';
  accentColor: string = '';

  constructor(
    private configService: ConfigService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const config = this.configService.config;
    this.primaryColor = this.configService.primaryColor;
    this.accentColor = this.configService.accentColor;
    if (config) {
      this.topBar = config.topBar;
      this.styles = config.topBar?.styles;
      this.showLanguageSelection = config.language?.languageDropDown!;
    }

    this.subscription = this.route.queryParams.subscribe((params) => {
      if (params['id']) {
        this.showSearchBar = false;
      } else {
        this.showSearchBar = config.searchBar!;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
