import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHomeworkComponent } from './our-homework.component';

describe('OurHomeworkComponent', () => {
  let component: OurHomeworkComponent;
  let fixture: ComponentFixture<OurHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurHomeworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
