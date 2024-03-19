import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCarouselComponent } from './code-carousel.component';

describe('CodeCarouselComponent', () => {
  let component: CodeCarouselComponent;
  let fixture: ComponentFixture<CodeCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
