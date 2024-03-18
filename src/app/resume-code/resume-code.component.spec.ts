import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCodeComponent } from './resume-code.component';

describe('ResumeCodeComponent', () => {
  let component: ResumeCodeComponent;
  let fixture: ComponentFixture<ResumeCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
