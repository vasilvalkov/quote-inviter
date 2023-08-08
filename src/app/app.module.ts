import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { AddressBookModule } from './address-book/address-book.module';
import { HeaderComponent } from './header/header.component';
import { ThemeService } from './shared/services/theme.service';
import { InviteesCartModule } from './invitees-cart/invitees-cart.module';

function initializeTheme(themeService: ThemeService) {
  return () => themeService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AddressBookModule,
    InviteesCartModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeTheme,
      multi: true,
      deps: [ThemeService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
