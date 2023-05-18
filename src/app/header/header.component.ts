import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() navSwitched = new EventEmitter<string>();

  navigationSwitch(target: string) {
    this.navSwitched.emit(target)
  }
}