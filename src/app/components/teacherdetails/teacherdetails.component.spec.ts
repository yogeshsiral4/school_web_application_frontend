import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherdetailsComponent } from './teacherdetails.component';

describe('TeacherdetailsComponent', () => {
  let component: TeacherdetailsComponent;
  let fixture: ComponentFixture<TeacherdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
