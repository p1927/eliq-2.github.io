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
  constructor(private configService: ConfigService) {}
  accentColor: string = '';

  ngOnInit(): void {
    this.accentColor = this.configService.accentColor;
    const config = this.configService.config.language;
    if (config) {
      this.supportedLanguages = config.supportedLanguages;
      this.preferredLanguage = config.preferredLanguage;
    }
  }

  onLanguageChange(event: any): void {
    this.configService.preferredLanguage.set(event.value);
  }
}
