import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  public currentDate: Date;
  public money: Number;
  public rate: Number;

  constructor() {
    this.currentDate = new Date();
    this.money = 1345756.49;
    this.rate = 3.5;
  }

  ngOnInit() {
  }

}
