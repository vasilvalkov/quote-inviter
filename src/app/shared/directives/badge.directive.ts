import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'app-badge, [app-badge]'
})
export class BadgeDirective implements OnInit {

  constructor(
    private host: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.host.nativeElement.parentElement, 'position', 'relative');
    this.renderer.setProperty(this.host.nativeElement, 'style', `
      background-color: var(--color-accent);
      color: var(--color-gray-50);
      padding: 4px 8px;
      position: absolute;
      top: 0;
      right: -12px;
      border-radius: 50%;
      font-size: 0.85rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      line-height: 24px;
      min-width: 24px;
      height: 24px;
    `);
  }

}
