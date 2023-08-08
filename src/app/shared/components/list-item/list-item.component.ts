import { ChangeDetectionStrategy, Component, ElementRef, HostBinding } from '@angular/core';

@Component({
  selector: 'app-list-item, li[app-list-item]',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {

  constructor(private host: ElementRef<HTMLElement>) { }

  @HostBinding('class.active')
  get isActive() {
    return this.host.nativeElement.parentElement.classList.contains('active');
  }

}
