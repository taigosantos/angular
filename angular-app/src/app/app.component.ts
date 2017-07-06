import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // PROPERTIES

  leftSidenavMode: string;
  leftSidenavIsOppened: boolean;
  links: any[] = [
    { name: 'Inbox' },
    { name: 'Outbox' },
    { name: 'Spam' },
    { name: 'Trash' }

  ];

  thirdLine = false;
  infoClicked = false;

  // COMPONENT METHODS

  ngOnInit() {
    this.leftSidenavMode = 'side';
    this.leftSidenavIsOppened = true;
  }

  // LEFT SIDE METHODS

  pinLeftSideNav() {
    this.leftSidenavMode = 'side';
    this.leftSidenavIsOppened = true;
  }

  unpinLeftSideNav() {
    this.leftSidenavMode = 'over';
    this.leftSidenavIsOppened = false;
  }

  isLeftSidenavPinned(): boolean {
    return this.leftSidenavMode === 'side';
  }

}
