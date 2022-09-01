import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPrestationsComponent } from './mes-prestations.component';

describe('MesPrestationsComponent', () => {
  let component: MesPrestationsComponent;
  let fixture: ComponentFixture<MesPrestationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesPrestationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesPrestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
