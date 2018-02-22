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

  onValueChange(event: string) {

    const newActualVal = event.replace(this.replaceRegex, '');

    if (newActualVal !== this.actualValue) {
      this.displayValue = event;
      this.actualValue = event.replace(this.replaceRegex, '');
    }
  }
}
