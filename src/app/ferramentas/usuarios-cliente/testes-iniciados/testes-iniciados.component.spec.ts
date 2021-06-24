import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesIniciadosComponent } from './testes-iniciados.component';

describe('TestesIniciadosComponent', () => {
  let component: TestesIniciadosComponent;
  let fixture: ComponentFixture<TestesIniciadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestesIniciadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestesIniciadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
