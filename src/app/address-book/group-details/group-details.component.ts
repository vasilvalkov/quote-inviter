import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact, GroupContact, InviteesService } from 'src/app/shared';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent {

  @Input() group: GroupContact;

  @Output() closed = new EventEmitter<void>();

  constructor(private inviteesService: InviteesService) { }

  trackbyFn = (index: number, contact: Contact) => contact.id;

  onChange(event: Event, contact: Contact) {
    const { checked } = (<HTMLInputElement>event.target);

    this.inviteesService.toggleContactSelected(checked, contact)
  }

  toggleChecked(checkbox: HTMLInputElement): void {
    checkbox.checked = !checkbox.checked;
    checkbox.dispatchEvent(new Event('change'));
  }

}
