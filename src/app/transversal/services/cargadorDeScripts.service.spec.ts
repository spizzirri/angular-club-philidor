import { TestBed } from '@angular/core/testing';

import { CargadorDeScriptsService } from './cargadorDeScripts.service';

describe('DynamicScriptLoaderServiceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargadorDeScriptsService = TestBed.get(CargadorDeScriptsService);
    expect(service).toBeTruthy();
  });
});
