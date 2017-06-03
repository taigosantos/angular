import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterializeIconsComponent } from './materialize-icons.component';

describe('MaterializeIconsComponent', () => {
  let component: MaterializeIconsComponent;
  let fixture: ComponentFixture<MaterializeIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterializeIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterializeIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
