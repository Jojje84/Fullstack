import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lektion1Component } from './lektion1.component';

describe('Lektion1Component', () => {
  let component: Lektion1Component;
  let fixture: ComponentFixture<Lektion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lektion1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lektion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
