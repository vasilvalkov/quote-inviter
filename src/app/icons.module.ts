import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Check, Inbox, Moon, Sun, Users, X, AtSign } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Users, X, Sun, Moon, Check, Inbox, AtSign
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