import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @Input('appDropdown') className: string = 'open';
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('document:click', ['$event']) closeDropdown(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) { }

  ngOnInit() {

  }
}
