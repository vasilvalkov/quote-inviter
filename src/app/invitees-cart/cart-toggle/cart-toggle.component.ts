import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-toggle',
  templateUrl: './cart-toggle.component.html',
  styleUrls: ['./cart-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartToggleComponent {

  constructor(public cartService: CartService) {}

}
