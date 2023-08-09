import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Counterparty, CounterpartiesService } from './shared';
import { CartService } from './invitees-cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  contacts!: Observable<Counterparty[]>;

  isCartOpen: Observable<boolean>;

  constructor(
    private countarpartiesService: CounterpartiesService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.countarpartiesService.fetchAllCounterparties().subscribe();
    this.contacts = this.countarpartiesService.counterpaties;
    this.isCartOpen = this.cartService.isOpen;
  }

}
