import { Injectable } from '@angular/core';
import { getTestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  private _userSettings: {};
  isDarkMode: boolean;
  constructor() {
    this.getUserSettings();

    this.isDarkMode = this.getUserSetting('dark');
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
