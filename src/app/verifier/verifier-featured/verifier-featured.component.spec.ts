import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifierFeaturedComponent } from './verifier-featured.component';

describe('VerifierFeaturedComponent', () => {
  let component: VerifierFeaturedComponent;
  let fixture: ComponentFixture<VerifierFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifierFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifierFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
