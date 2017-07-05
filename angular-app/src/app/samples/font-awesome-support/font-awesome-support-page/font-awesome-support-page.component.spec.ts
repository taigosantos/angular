import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeSupportPageComponent } from './font-awesome-support-page.component';

describe('FontAwesomeSupportPageComponent', () => {
  let component: FontAwesomeSupportPageComponent;
  let fixture: ComponentFixture<FontAwesomeSupportPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontAwesomeSupportPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontAwesomeSupportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
