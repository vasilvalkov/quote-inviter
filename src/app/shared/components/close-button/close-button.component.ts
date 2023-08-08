import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonSize } from '../button/button-size';

@Component({
  selector: 'app-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CloseButtonComponent {

  @Input() size: ButtonSize = 'small';

  @Output() close = new EventEmitter<void>();

}
