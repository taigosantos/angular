import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalizationSupportPageComponent } from './internationalization-support-page.component';

describe('InternationalizationSupportPageComponent', () => {
  let component: InternationalizationSupportPageComponent;
  let fixture: ComponentFixture<InternationalizationSupportPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalizationSupportPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalizationSupportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
