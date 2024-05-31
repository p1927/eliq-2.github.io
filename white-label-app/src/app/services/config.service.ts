import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../models/config.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configUrl = 'assets/config.json';
  preferredLanguage = 'EN';
  listLayout = 'card-grid';
  config: Partial<Config> = {};

  constructor(private http: HttpClient) {}

  initializeConfig(): void {
    this.http
      .get<Config>(this.configUrl)
      .subscribe((config: Config) => (this.config = config));
  }
}
