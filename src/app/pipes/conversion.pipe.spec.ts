import { HttpClient, HttpHandler } from '@angular/common/http';
import { CurrencyService } from '../services/currency.service';
import { ConversionPipe } from './conversion.pipe';


describe('ConversionPipe', () => {
  it('create an instance', () => {
    const pipe = new ConversionPipe();
    expect(pipe).toBeTruthy();
  });
});
