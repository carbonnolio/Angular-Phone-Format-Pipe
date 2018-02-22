import { Component } from '@angular/core';
import { AwesomePhonePipe } from './awesome-phone.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Awesome Phone Directive Example';

  actualValue: string;
  displayValue: string;
  replaceRegex = /[^\w\s]/gi;

  onValueChange(event: string) {
    this.displayValue = event;
    this.actualValue = event.replace(this.replaceRegex, '');
  }
}
