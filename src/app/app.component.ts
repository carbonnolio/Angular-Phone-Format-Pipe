import { Component } from '@angular/core';
import { AwesomePhonePipe } from './awesome-phone.pipe';
import { OnlyNumberDirective } from './only-number.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Awesome Phone Pipe/Directive Example';

  actualValue: string;
  displayValue: string;
  replaceRegex = /[^\d\s]/gi;

  onValueChange(newVal: string) {

    this.displayValue = newVal;
    this.actualValue = newVal.replace(this.replaceRegex, '');
  }
}
