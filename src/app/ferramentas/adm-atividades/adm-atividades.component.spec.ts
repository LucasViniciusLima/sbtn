import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAtividadesComponent } from './adm-atividades.component';

describe('AdmAtividadesComponent', () => {
  let component: AdmAtividadesComponent;
  let fixture: ComponentFixture<AdmAtividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmAtividadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
