import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { Config } from 'src/app/models/config.model';
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
  private subscription!: Subscription;
  primaryColor: string = '';
  accentColor: string = '';

  constructor(private configService: ConfigService, private router: Router) {}

  ngOnInit(): void {
    const config = this.configService.config;
    this.topBar = config.topBar;
    this.styles = config.topBar?.styles;
    this.showLanguageSelection = config.language?.languageDropDown || false;
    this.setSearchBarVisibility(config);
    this.setColors();
  }

  private setSearchBarVisibility(config: Partial<Config>): void {
    this.updateSearchBarVisibility(config, this.router.url);

    this.subscription = this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateSearchBarVisibility(config, event.url);
      });
  }

  private updateSearchBarVisibility(
    config: Partial<Config>,
    url: string
  ): void {
    this.showSearchBar = url === '/drinks' ? config.searchBar || false : false;
  }

  private setColors(): void {
    this.primaryColor = this.configService.primaryColor;
    this.accentColor = this.configService.accentColor;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
