import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVitalSingsComponent } from './update-vital-sings.component';

describe('UpdateVitalSingsComponent', () => {
  let component: UpdateVitalSingsComponent;
  let fixture: ComponentFixture<UpdateVitalSingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVitalSingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVitalSingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
