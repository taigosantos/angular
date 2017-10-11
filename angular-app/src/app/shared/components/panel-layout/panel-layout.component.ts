import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MatSidenav, MatButton } from '@angular/material';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss']
})
export class PanelLayoutComponent implements OnInit {

  // PROPERTIES

  @ViewChild('leftSideNav') leftSideNav: MatSidenav;
  @ViewChild('rightSideNav') rightSideNav: MatSidenav;

  mediaChangeSubscription: Subscription;
  navigationEndSubscription: Subscription;

  // CONSTRUCTOR

  constructor(
    private router: Router,
    public media: ObservableMedia) {
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

  initLeftSideNavPinnedIfMatchConditions() {
    if (!this.media.isActive('xs')) {
      this.pinLeftSideNav();
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

  subscribeToMediaChange() {
    this.mediaChangeSubscription = this.media.asObservable().subscribe((change: MediaChange) => {
      if (change.mqAlias == 'xs') {
        this.unpinLeftSideNav();
      }
    });
  }

  isExtraSmallMedia(): boolean {
    return this.media.isActive('xs');
  }

  // COMPONENT EVENTS

  ngOnInit() {
    this.subscribeToRouteNavigationsEnd();
    this.initLeftSideNavPinnedIfMatchConditions();
    this.subscribeToMediaChange();
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
