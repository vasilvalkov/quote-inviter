import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Counterparty, InviteesService } from '../../shared';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailsComponent {

  @Input({ required: true }) contact: Counterparty;

  @Input({ required: true }) selected: boolean;

  @Output() closed = new EventEmitter<void>();

  constructor(private inviteesService: InviteesService) { }

  invite(): void {
    this.inviteesService.invite(this.contact.email);
  }

  uninvite(): void {
    this.inviteesService.uninvite(this.contact.email);
  }

  onClose(): void {
    this.closed.emit();
  }

}
