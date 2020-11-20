import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserData } from 'src/app/_models/users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() userData: UserData;

  timeFormat(timeStamp) {
    timeStamp = timeStamp * 1000;
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(timeStamp, 'MMM d, yyyy');
  }
}
