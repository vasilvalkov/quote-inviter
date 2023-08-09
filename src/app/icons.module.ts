import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Check, Inbox, Moon, Sun, Users, X, AtSign, Send } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Users, X, Sun, Moon, Check, Inbox, AtSign, Send
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }