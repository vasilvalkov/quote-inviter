import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';

import { IconsModule } from '../icons.module';
import { ContactListItemComponent } from './components/contact-list-item/contact-list-item.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { CardComponent } from './components/card/card.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { BadgeDirective } from './directives/badge.directive';
import { CloseButtonComponent } from './components/close-button/close-button.component';


@NgModule({
  declarations: [
    ContactListItemComponent,
    ThemeToggleComponent,
    CardComponent,
    ListItemComponent,
    ButtonComponent,
    CheckboxComponent,
    BadgeDirective,
    CloseButtonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    A11yModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    A11yModule,
    ContactListItemComponent,
    ThemeToggleComponent,
    CardComponent,
    ListItemComponent,
    ButtonComponent,
    CheckboxComponent,
    BadgeDirective,
    CloseButtonComponent
  ]
})
export class SharedModule { }
