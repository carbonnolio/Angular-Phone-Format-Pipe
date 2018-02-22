import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'awesomePhone'
})
export class AwesomePhonePipe implements PipeTransform {

  transform(value: string, replaceRegexp: RegExp): any {

    if (value && replaceRegexp) {
      const strippedValArr = value.replace(replaceRegexp, '').split('');

      const first = strippedValArr.splice(0, 3);
      const second = strippedValArr.splice(0, 3);
      const third = strippedValArr.splice(0, 4);

      const firstPortion = `${first.length > 0 ? '(' : ''}${first.join('')}${first.length > 2 ? ')' : ''}`;
      const secondPortion = `${second.join('')}${second.length > 2 ? '-' : ''}`;

      return `${firstPortion}${secondPortion}${third.join('')}`;
    }

    return null;
  }

}
