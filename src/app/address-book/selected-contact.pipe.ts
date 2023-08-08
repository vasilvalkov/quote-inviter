import { Pipe, PipeTransform } from '@angular/core';
import { Contact, GroupContact } from '../shared';

@Pipe({
  name: 'isSelectedContact',
  pure: false
})
export class SelectedContactPipe implements PipeTransform {

  transform(contact: Contact): boolean {
    if (contact.type === 'individual') {
      return contact.selected;
    } else {
      return (contact as GroupContact).data.counterparties.every(c => c.selected);
    }
  }

}
