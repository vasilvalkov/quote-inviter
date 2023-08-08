import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { InviteesService } from '../shared';


@Directive({
  selector: 'app-invitees-count, [app-invitees-count]'
})
export class InviteesCountDirective implements OnInit, OnDestroy {

  private subs = new Subscription();

  constructor(
    private host: ElementRef<HTMLElement>,
    private inviteesService: InviteesService
  ) { }

  ngOnInit(): void {
    this.subs = this.inviteesService.invited
      .pipe(
        map(value => value.length.toString()),
        tap(count => this.host.nativeElement.innerText = count)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
