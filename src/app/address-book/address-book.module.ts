import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressBookComponent } from './address-book.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SharedModule } from '../shared';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { SelectedContactPipe } from './selected-contact.pipe';


@NgModule({
  declarations: [
    AddressBookComponent,
    ContactDetailsComponent,
    GroupDetailsComponent,
    SelectedContactPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    AddressBookComponent
  ]
})
export class AddressBookModule { }
