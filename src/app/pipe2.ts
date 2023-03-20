import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe2',
})
export class Pipe2 implements PipeTransform {
  transform(value: any, type: string) {
    switch (type) {
      case 'km':
        return value * 1;
      case 'm':
        return value * 1000;
      case 'cm':
        return value * 1000000;
      default:
        return new Error('khata');
    }
  }
}
