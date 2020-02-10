import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteProfileComponentComponent } from './complete-profile-component.component';

describe('CompleteProfileComponentComponent', () => {
  let component: CompleteProfileComponentComponent;
  let fixture: ComponentFixture<CompleteProfileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteProfileComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
