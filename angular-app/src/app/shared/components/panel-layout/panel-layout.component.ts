import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss']
})
export class PanelLayoutComponent implements OnInit, OnDestroy {

  // PROPERTIES

  @ViewChild('leftSideNav') leftSideNav: MdSidenav;
  @ViewChild('rightSideNav') rightSideNav: MdSidenav;
  navigationEndSubscription: Subscription;

  // CONSTRUCTOR

  constructor(
    private router: Router) {
    this.subscribeToRouteNavigationsEnd();
  }

  // LEFT SIDENAV METHODS

  openLeftSideNav() {
    this.leftSideNav.open();
  }

  closeLeftSideNav() {
    this.leftSideNav.close();
  }

  pinLeftSideNav() {
    this.leftSideNav.mode = SideNavMode.side;
    this.leftSideNav.opened = true;
  }

  unpinLeftSideNav() {
    this.leftSideNav.mode = SideNavMode.over;
    this.leftSideNav.opened = false;
  }

  isLeftSideNavPinned(): boolean {
    return this.leftSideNav.mode === SideNavMode.side;
  }

  isLeftSideNavOpened(): boolean {
    return this.leftSideNav.opened;
  }

  closeUnpinnedLeftSideNav() {
    if (!this.isLeftSideNavPinned() && this.isLeftSideNavOpened()) {
      this.leftSideNav.opened = false;
      this.leftSideNav.close();
    }
  }

  // RIGHT SIDENAV METHODS

  openRightSideNav() {
    this.rightSideNav.open();
  }

  closeRightSideNav() {
    this.rightSideNav.close();
  }

  // OTHER METHODS

  subscribeToRouteNavigationsEnd() {
    this.navigationEndSubscription = this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(event => this.closeUnpinnedLeftSideNav());
  }

  unSubscribeToRouteNavigationsEnd() {
    this.navigationEndSubscription.unsubscribe();
  }

  // COMPONENT EVENTS

  ngOnInit() {
    this.pinLeftSideNav();
  }

  ngOnDestroy() {
    this.unSubscribeToRouteNavigationsEnd();
  }

}

/**
 * SideNav Modes
 * @class SideNavMode
 */
class SideNavMode {
  static side: 'side' = 'side';
  static over: 'over' = 'over';
  static push: 'push' = 'push';
}
