import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
  supportedLanguages: string[] = [];
  preferredLanguage: string = 'EN';
  accentColor: string = '';

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.accentColor = this.configService.accentColor;
    const languageConfig = this.configService.config.language;
    if (languageConfig) {
      this.supportedLanguages = languageConfig.supportedLanguages;
      this.preferredLanguage = languageConfig.preferredLanguage;
    }
  }

  onLanguageChange(event: any): void {
    this.configService.preferredLanguage.set(event.value);
  }
}
