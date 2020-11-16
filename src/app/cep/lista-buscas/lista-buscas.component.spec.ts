import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBuscasComponent } from './lista-buscas.component';

describe('ListaBuscasComponent', () => {
  let component: ListaBuscasComponent;
  let fixture: ComponentFixture<ListaBuscasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBuscasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBuscasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
