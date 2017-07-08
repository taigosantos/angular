import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() showLeftSideOpener: boolean;
  @Output() leftSideNavOpenerClick = new EventEmitter();
  @Output() rightSideNavOpenerClick = new EventEmitter();

  onLeftSideNavOpenerClick() {
    this.leftSideNavOpenerClick.emit();
  }

  onRightSideNavOpenerClick() {
    this.rightSideNavOpenerClick.emit();
  }

}
