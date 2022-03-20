import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RequestService } from './request.service';

const responseA = [1, 2, 3];

describe('RequestService', () => {
  let service: RequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(RequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('formatResponse should return an object or array', () => {
    const resA: any = service.formatResponse(responseA, null, (el) => el > 1);
    expect(resA).toBeInstanceOf(Array);
    expect(resA.length).toBe(2);
  });

});
