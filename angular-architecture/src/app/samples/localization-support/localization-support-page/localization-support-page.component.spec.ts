import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationSupportPageComponent } from './localization-support-page.component';

describe('LocalizationSupportPageComponent', () => {
  let component: LocalizationSupportPageComponent;
  let fixture: ComponentFixture<LocalizationSupportPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizationSupportPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizationSupportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
