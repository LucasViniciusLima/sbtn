import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarItemBusynessComponent } from './editar-item-busyness.component';

describe('EditarItemBusynessComponent', () => {
  let component: EditarItemBusynessComponent;
  let fixture: ComponentFixture<EditarItemBusynessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarItemBusynessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarItemBusynessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
