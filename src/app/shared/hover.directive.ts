import { Directive, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cursorHover]',
  standalone: true
})
export class CursorHoverDirective implements OnInit {
  private cursorEl: HTMLElement | null = null;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.cursorEl = typeof document !== 'undefined' ? document.getElementById('custom-cursor') : null;
  }

  @HostListener('mouseenter')
  onEnter() {
    if (this.cursorEl) {
      this.renderer.addClass(this.cursorEl, 'hover-target-active');
    }
  }

  @HostListener('mouseleave')
  onLeave() {
    if (this.cursorEl) {
      this.renderer.removeClass(this.cursorEl, 'hover-target-active');
    }
  }
}
