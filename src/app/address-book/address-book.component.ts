import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Contact } from '../shared';
import { InviteesService } from '../shared/services/invitees.service';


@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressBookComponent {

  searchControl = new FormControl('');

  contacts: Observable<Contact[]>;
  selectedContact: Contact;

  constructor(private inviteesService: InviteesService) { }

  ngOnInit(): void {
    this.contacts = combineLatest([
      this.inviteesService.contacts,
      this.searchControl.valueChanges.pipe(startWith(''))
    ])
      .pipe(
        map(([contacts, searchTerm]) =>
          contacts.filter(contact =>
            contact.name.toLowerCase().includes(searchTerm)
          )
        )
      );
  }

  trackbyFn = (index: number, contact: Contact) => contact.id;

  onChange(event: Event, contact: Contact) {
    const { checked } = (<HTMLInputElement>event.target);

    this.inviteesService.toggleContactSelected(checked, contact)
  }

  selectItem(contact: Contact): void {
    if (this.selectedContact === contact) {
      this.onClearSelected();
    } else {
      this.selectedContact = contact;
    }
  }

  onClearSearch(): void {
    this.searchControl.setValue('');
  }

  onClearSelected(): void {
    this.selectedContact = null;
  }
}
