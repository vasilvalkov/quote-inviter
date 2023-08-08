import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListItemComponent {

  @Input({ required: true }) contact: Contact;

  @Output() selectItem = new EventEmitter<Contact>();

  onSelectItem(): void {
    this.selectItem.emit(this.contact);
  }

}
