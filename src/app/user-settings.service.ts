import { Injectable } from '@angular/core';
import { getTestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  private _userSettings: {layouts?: {}};
  isDarkMode: boolean;
  constructor() {
    this.getUserSettings();

    this.isDarkMode = this.getUserSetting('dark');
  }


  setLayout(key: string, value: boolean) {
    if ( !this._userSettings.layouts ) {
      this._userSettings.layouts = {[key]: value};
    } else {
      this._userSettings.layouts[key] = value;
    }

    this.saveSettings();
  }

  getLayouts() {
    return this.getUserSetting('layouts');
  }

  shouldShowLayout(key: string) {
    const layouts = this.getLayouts();
    if ( !layouts ) {
      return true;
    } else {
      return layouts[key];
    }
  }

  getUserSettings() {
    if (this._userSettings) {
      return this._userSettings;
    } else {
      const settings = window.localStorage.getItem('user-settings');

      if (settings) {
        this._userSettings = JSON.parse(settings);
      } else {
        this._userSettings = {};
      }
    }
  }

  saveSettings() {
    window.localStorage.setItem('user-settings', JSON.stringify(this._userSettings));
  }

  setUserSetting(key: string, setting: any) {
    this._userSettings[key] = setting;

    if ( key === 'dark' ) {
      this.isDarkMode = setting;
    }

    this.saveSettings();
  }

  getUserSetting(key: string) {
    const userSettings = this.getUserSettings();

    if (userSettings[key]) {
      return this._userSettings[key];
    } else {
      return false;
    }
  }
}
