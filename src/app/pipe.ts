import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomePipe implements PipeTransform {
  transform(value: any) {
    return value * 1.6;
  }
}
