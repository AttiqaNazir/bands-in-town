import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /// Get artist 'test'
  // 'test' doesnot exists
  it('artist should be empty', () => {
    service
      .searchArtist('test')
      .toPromise()
      .then((x) => {
        expect(x).toEqual([]);
      });
  });

  /// Get artist 't'
  // 't'  exists
  it('artist should not be empty', () => {
    service
      .searchArtist('t')
      .toPromise()
      .then((x) => {
        expect(x.length).toBeGreaterThan(0);
      });
  });

  /// Get events for artist 'test'
  /// 'test' has no events arranged
  it('events should be empty', () => {
    service
      .getEvent('test')
      .toPromise()
      .then((x) => {
        expect(x).toEqual([]);
      });
  });

  /// Get events for artist t
  /// t has some events arranged
  it('events should not be empty', () => {
    service
      .getEvent('t')
      .toPromise()
      .then((x) => {
        expect(x.length).toBeGreaterThan(0);
      });
  });
});
