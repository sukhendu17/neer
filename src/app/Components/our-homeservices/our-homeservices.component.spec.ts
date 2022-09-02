import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHomeservicesComponent } from './our-homeservices.component';

describe('OurHomeservicesComponent', () => {
  let component: OurHomeservicesComponent;
  let fixture: ComponentFixture<OurHomeservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurHomeservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurHomeservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
