import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private _isDarkMode = true;
  private storageKey = 'dark-mode';

  constructor(@Inject(DOCUMENT) private document: Document) { }

  get isDarkMode(): boolean {
    return this._isDarkMode;
  }

  toggleTheme(): void {
    this._isDarkMode = !this._isDarkMode;
    this.toggleBodyThemeClass();
    localStorage.setItem(this.storageKey, this._isDarkMode.toString());
  }

  init(): void {
    const storedMode = coerceBooleanProperty(localStorage.getItem(this.storageKey));
    this._isDarkMode = storedMode;
    this.toggleBodyThemeClass();
  }

  private toggleBodyThemeClass(): void {
    const { classList } = this.document.body;
    classList.toggle('dark-mode', this._isDarkMode);
  }
}