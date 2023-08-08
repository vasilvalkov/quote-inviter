import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared';
import { CartToggleComponent } from './cart-toggle/cart-toggle.component';
import { InviteesCountDirective } from './invitees-count.directive';


@NgModule({
  declarations: [
    CartComponent,
    CartToggleComponent,
    InviteesCountDirective
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CartComponent,
    CartToggleComponent
  ]
})
export class InviteesCartModule { }
