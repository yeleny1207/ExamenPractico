import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { EquipoService } from './equipo';   

describe('EquipoService', () => {
  let service: EquipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EquipoService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(EquipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});