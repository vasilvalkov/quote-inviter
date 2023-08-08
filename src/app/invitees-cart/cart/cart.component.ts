import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, take } from 'rxjs';
import { tap } from 'rxjs/operators';

import { InviteesService } from 'src/app/shared';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {

  invitees: Observable<string[]>;
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private inviteesService: InviteesService) { }

  ngOnInit(): void {
    this.invitees = this.inviteesService.invited;
  }

  onAddEmail(): void {
    if (!this.emailControl.valid) {
      return;
    }

    this.inviteesService.invite(this.emailControl.value);
    this.emailControl.setValue('');
  }

  onRemoveInvite(email: string): void {
    this.inviteesService.uninvite(email);
  }

  onSendInvitations(): void {
    this.inviteesService.invited
      .pipe(
        take(1),
        tap(console.log), // Preview what has been sent
        tap(() => this.inviteesService.uninviteAll())
      )
      .subscribe();
  }
}
