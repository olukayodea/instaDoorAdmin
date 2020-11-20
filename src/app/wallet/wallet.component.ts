import { Component, OnInit } from '@angular/core';
import { RoleCOntrol } from '../_models/data';
import { UserData } from '../_models/users';
import { ApiService } from '../_services/api.service';
import { ChecksService } from '../_services/checks.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  page: string = "wallet";
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
