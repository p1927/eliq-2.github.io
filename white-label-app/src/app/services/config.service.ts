import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Config, Theme } from '../models/config.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly configUrl = 'assets/config.json';
  preferredLanguage = signal('EN');
  listLayout = 'card-grid';
  config: Partial<Config> = {};
  isLoading = false;
  primaryColor = '';
  accentColor = '';
  secondaryColor = '';

  constructor(private http: HttpClient) {}

  initializeConfig(): void {
    this.isLoading = true;
    this.http.get<Config>(this.configUrl).subscribe({
      next: (config: Config) => {
        this.isLoading = false;
        this.config = config;
        this.preferredLanguage.set(config.language.preferredLanguage);
        this.setThemeColors(config);
      },
      error: () => {
        this.isLoading = false; // Handle error appropriately
      },
    });
  }

  private setThemeColors(config: Config): void {
    const selectedPalette = config.theme
      .selectedPalette as keyof Config['theme']['palette'];
    const themeColors = config.theme.palette[selectedPalette] as Theme;

    if (themeColors) {
      this.primaryColor = themeColors.primary;
      this.secondaryColor = themeColors.secondary;
      this.accentColor = themeColors.accent;
    }
  }
}
