import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaBuscasComponent } from './tabela-buscas.component';

describe('TabelaBuscasComponent', () => {
  let component: TabelaBuscasComponent;
  let fixture: ComponentFixture<TabelaBuscasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaBuscasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaBuscasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
