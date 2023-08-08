import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'input[type="checkbox"][app-checkbox]',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {

}
