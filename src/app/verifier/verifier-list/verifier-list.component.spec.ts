import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifierListComponent } from './verifier-list.component';

describe('VerifierListComponent', () => {
  let component: VerifierListComponent;
  let fixture: ComponentFixture<VerifierListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifierListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
