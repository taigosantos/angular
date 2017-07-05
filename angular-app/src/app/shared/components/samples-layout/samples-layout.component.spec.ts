import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplesLayoutComponent } from './samples-layout.component';

describe('SamplesLayoutComponent', () => {
  let component: SamplesLayoutComponent;
  let fixture: ComponentFixture<SamplesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
