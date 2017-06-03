import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterializeFormsComponent } from './materialize-forms.component';

describe('MaterializeFormsComponent', () => {
  let component: MaterializeFormsComponent;
  let fixture: ComponentFixture<MaterializeFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterializeFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterializeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
