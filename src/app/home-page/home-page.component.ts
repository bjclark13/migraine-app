import { Component, OnInit } from '@angular/core';

import { UserSettingsService } from '../user-settings.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  title = 'The Migraine App';
  dark : boolean;
  layouts : {} | false;

  private _config : UserSettingsService;

  constructor(config: UserSettingsService) {
    this._config = config;
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

  ngOnInit() {
    this.dark = this._config.getUserSetting('dark');
    this.getLayouts();
  }

}
