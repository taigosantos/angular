import { Component, OnInit, Output, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() showLeftSideOpener: boolean;
  @Output() leftSideNavOpenerClick = new Subject();
  @Output() rightSideNavOpenerClick = new Subject();

  onLeftSideNavOpenerClick() {
    this.leftSideNavOpenerClick.next();
  }

  onRightSideNavOpenerClick() {
    this.rightSideNavOpenerClick.next();
  }

}
