import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localization-support-page',
  templateUrl: './localization-support-page.component.html',
  styleUrls: ['./localization-support-page.component.scss']
})
export class LocalizationSupportPageComponent implements OnInit {

  public currentDate: Date;
  public money: Number;
  public rate: Number;

  constructor() {
  }

  ngOnInit() {
    this.currentDate = new Date();
    this.money = 1345756.49;
    this.rate = 3.5;
  }

}
