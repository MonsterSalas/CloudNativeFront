import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVitalSignsComponent } from './new-vital-signs.component';

describe('NewVitalSignsComponent', () => {
  let component: NewVitalSignsComponent;
  let fixture: ComponentFixture<NewVitalSignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVitalSignsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewVitalSignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
