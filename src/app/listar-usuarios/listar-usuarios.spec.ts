import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUsuariosComponent } from './listar-usuarios';

describe('ListarUsuarios', () => {
  let component: ListarUsuariosComponent;
  let fixture: ComponentFixture<ListarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarUsuariosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarUsuariosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
