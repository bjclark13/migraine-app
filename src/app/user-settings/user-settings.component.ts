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

  constructor(config: UserSettingsService) {
    this._config = config;
    this.dark = config.getUserSetting('dark');
  }

  toggleDarkMode() {
    this._config.setUserSetting('dark', this.dark);
  }

  ngOnInit() {
  }
}
