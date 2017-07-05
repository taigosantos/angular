import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplesHomePageComponent } from './samples-home-page.component';

describe('HomePageComponent', () => {
  let component: SamplesHomePageComponent;
  let fixture: ComponentFixture<SamplesHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplesHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplesHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
