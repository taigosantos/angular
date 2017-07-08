import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss']
})
export class PanelLayoutComponent implements OnInit {

  // PROPERTIES

  leftSidenavMode: string;
  leftSidenavIsOppened: boolean;

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
