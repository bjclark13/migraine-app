import { Component } from '@angular/core';

import { UserSettingsService } from './user-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'The Migraine App';
  dark : boolean;
  layouts : {} | false;

  public _config : UserSettingsService;

  constructor(config: UserSettingsService) {
    this._config = config;

    this.dark = this._config.getUserSetting('dark');
    this.getLayouts();
  }

  toggleDarkMode() {
    this.dark = !this.dark;
    this._config.setUserSetting('dark', this.dark);
  }

  getLayouts() {
    this.layouts = this._config.getUserSetting('layouts');
  }

  shouldShowLayout(key: string) {
    if ( !this.layouts ) {
      return true;
    } else {
      return this.layouts[key];
    }
  }
}
