import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusynessModelComponent } from './busyness-model.component';

describe('BusynessModelComponent', () => {
  let component: BusynessModelComponent;
  let fixture: ComponentFixture<BusynessModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusynessModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusynessModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
