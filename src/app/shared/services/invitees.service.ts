import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Contact, GroupContact, IndividualContact } from '../models/contact';


@Injectable({
  providedIn: 'root'
})
export class InviteesService {

  groups = new BehaviorSubject<GroupContact[]>([]);

  individuals = new BehaviorSubject<IndividualContact[]>([]);

  contacts = combineLatest([this.groups, this.individuals]).pipe(
    map(([groups, individuals]) => [...groups, ...individuals])
  );

  selected = this.contacts.pipe(
    switchMap(() => this.individuals),
    map(value => value.filter(c => c.selected))
  );

  private _invited = new BehaviorSubject<string[]>([]);

  get invited(): Observable<string[]> {
    return this._invited.asObservable();
  }

  toggleContactSelected(selected: boolean, contact: Contact) {
    if (contact.type === 'individual') {
      this.toggleInvited(contact, selected);
      this.individuals.next([...this.individuals.getValue()]);
    } else {
      const currentValue = this.groups.getValue();
      const currentGroup = currentValue.find(value => value.id === contact.id);
      currentGroup.data.counterparties.forEach(counterparty => {
        this.toggleInvited(counterparty, selected);
      });

      this.groups.next([...currentValue]);
    }
  }

  invite(email: string): void {
    if (!email || this._invited.getValue().includes(email)) {
      return;
    }

    this._invited.next([...this._invited.getValue(), email]);

    this.updateContactSelectedState(email, true);
  }

  uninvite(email: string): void {
    if (!email || !this._invited.getValue().includes(email)) {
      return;
    }

    this._invited.next(this._invited.getValue().filter(value => value !== email));

    this.updateContactSelectedState(email, false);
  }

  uninviteAll(): void {
    this._invited.next([]);
    const contacts = this.individuals.getValue();
    contacts.forEach(c => c.selected = false);
    this.individuals.next([...contacts]);
  }

  private toggleInvited(contact: IndividualContact, checked: boolean) {
    contact.selected = checked;
    if (checked) {
      this.invite(contact.data.email);
    } else {
      this.uninvite(contact.data.email);
    }
  }

  private updateContactSelectedState(email: string, selected: boolean): void {
    const storedContact = this.individuals.getValue().find(i => i.data.email === email);
    if (storedContact) {
      storedContact.selected = selected;
    }

    this.individuals.next([...this.individuals.getValue()]);
  }
}
