import { Component, OnInit } from '@angular/core';
import { RoleCOntrol } from '../_models/data';
import { UserData } from '../_models/users';
import { ApiService } from '../_services/api.service';
import { ChecksService } from '../_services/checks.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  page: string = "stores";
  userData: UserData;
  rolesData: RoleCOntrol;
  
  constructor(
    private apiService: ApiService,
    private checkService: ChecksService
  ) { }

  ngOnInit(): void {
    this.checkService.checkSession();
    this.userData = JSON.parse(localStorage.getItem("userData"));
    this.rolesData = this.checkService.checkRoles(this.userData);
  }

}
