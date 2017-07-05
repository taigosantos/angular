import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterializeModalComponent } from './materialize-modal.component';

describe('MaterializeModalComponent', () => {
  let component: MaterializeModalComponent;
  let fixture: ComponentFixture<MaterializeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterializeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterializeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
