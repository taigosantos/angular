import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internationalization-support-page',
  templateUrl: './internationalization-support-page.component.html',
  styleUrls: ['./internationalization-support-page.component.scss']
})
export class InternationalizationSupportPageComponent implements OnInit {

  totalMessages: number = 10;
  gender: string = 'm';

  constructor() { }

  ngOnInit() {
  }

}
