import { Component, OnInit } from '@angular/core';
import { UserSettingsService } from '../user-settings.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  _config: UserSettingsService;
  dark: boolean;
  dailyEncouragement: boolean;

  constructor(config: UserSettingsService) {
    this._config = config;
  }

  toggleDarkMode() {
    this._config.setUserSetting('dark', this.dark);
  }

  ngOnInit() {
    this.dailyEncouragement = this._config.shouldShowLayout('daily-encouragement');
    this.dark = this._config.getUserSetting('dark');
  }
}
