import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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

  constructor(private inviteesService: InviteesService) { }

  invite(): void {
    this.inviteesService.invite(this.contact.email);
  }

  uninvite(): void {
    this.inviteesService.uninvite(this.contact.email);
  }

}
