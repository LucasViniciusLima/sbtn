import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbtnHomeComponent } from './sbtn-home.component';

describe('SbtnHomeComponent', () => {
  let component: SbtnHomeComponent;
  let fixture: ComponentFixture<SbtnHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbtnHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbtnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
