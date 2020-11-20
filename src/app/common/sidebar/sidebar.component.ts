import { Component, Input } from '@angular/core';
import { UserData } from 'src/app/_models/users';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() userData: UserData;
  @Input() page: string;

}
