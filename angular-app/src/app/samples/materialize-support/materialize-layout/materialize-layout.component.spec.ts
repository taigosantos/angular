import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterializeLayoutComponent } from './materialize-layout.component';

describe('MaterializeLayoutComponent', () => {
  let component: MaterializeLayoutComponent;
  let fixture: ComponentFixture<MaterializeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterializeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterializeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
