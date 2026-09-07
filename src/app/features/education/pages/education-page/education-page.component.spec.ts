import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationPageComponent } from './education-page.component';

describe('EducationPageComponent', () => {
  let component: EducationPageComponent;
  let fixture: ComponentFixture<EducationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
