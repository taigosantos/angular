import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalErrorPageComponent } from './internal-error-page.component';

describe('InternalErrorPageComponent', () => {
  let component: InternalErrorPageComponent;
  let fixture: ComponentFixture<InternalErrorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalErrorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
