import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.logout();
  }

  logout() {

    localStorage.removeItem("remember");
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    localStorage.removeItem("route");

    this.apiService.logout()

    this.router.navigate(['/']);
  }

}
