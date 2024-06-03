import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Config, Theme } from '../models/config.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configUrl = 'assets/config.json';
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
    });
  }

  setThemeColors(config: Config): void {
    const selectedTheme = config.theme
      .selectedPalette as keyof Config['theme']['palette'];
    if (selectedTheme) {
      this.primaryColor = (
        config.theme.palette[selectedTheme] as Theme
      )?.primary;
      this.secondaryColor = (
        config.theme.palette[selectedTheme] as Theme
      )?.secondary;
      this.accentColor = (config.theme.palette[selectedTheme] as Theme)?.accent;
    }
  }
}
