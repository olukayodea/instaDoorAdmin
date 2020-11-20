import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../_models/users';
import { RoleCOntrol } from '../_models/data';

@Injectable({
  providedIn: 'root'
})
export class ChecksService {
  constructor(
    private router: Router
  ) { }

  checkLoggedin(data) {
    if (data.success !== true) {
      if (data.error.code == 10018) {
        this.router.navigate(['/login/error/19000']);
      }
    }
  }
  
  checkSession(home:true|false = false) {
    var remember = Number(localStorage.getItem("remember"));
    var token = localStorage.getItem("token");
    var currentTime = Math.floor((Date.now() / 1000));

    var url = this.router.url.slice(1);

    if (url === "") {
      localStorage.removeItem("route");
    } else {
      localStorage.setItem('route', url);
    }

    if ((token !== null) && (remember > currentTime)) {
      var currentTime = Math.floor(remember + (60*10));
      localStorage.setItem('remember', currentTime.toString());
    } else {
      localStorage.removeItem("remember");
      localStorage.removeItem("token");
      localStorage.removeItem("userData");

      if (home === false) {
        this.router.navigate(['/login']);
      }
    }
  }

  checkRoles(userData: UserData) {
    var allowedRoles: RoleCOntrol = new RoleCOntrol();
    let roleCOdes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    if (userData == null) {
      return allowedRoles;
    }
    
    roleCOdes.forEach( function (value) {
      let roles = userData.roles.find(x => x.role_id == value, true);

      if (roles !== undefined) {
        if (value == 1) {
          allowedRoles.customer = true;
        } else if (value == 2) {
          allowedRoles.store.manageStore = true;
        } else if (value == 3) {
          allowedRoles.store.manageAdmin = true;
        } else if (value == 4) {
          allowedRoles.store.approveStoreAdmin = true;
        } else if (value == 5) {
          allowedRoles.store.approveStore = true;
        } else if (value == 6) {
          allowedRoles.courier.manage = true;
        } else if (value == 7) {
          allowedRoles.courier.approve = true;
        } else if (value == 8) {
          allowedRoles.orders = true;
        } else if (value == 9) {
          allowedRoles.admin = true;
        } else if (value == 10) {
          allowedRoles.wallet.manageCustomer = true;
        } else if (value == 11) {
          allowedRoles.wallet.manageStore = true;
        } else if (value == 12) {
          allowedRoles.wallet.manageCourier = true;
        } else if (value == 13) {
          allowedRoles.inventory = true;
        }  else if (value == 14) {
          allowedRoles.payouts.manageRequest = true;
        }  else if (value == 15) {
          allowedRoles.payouts.approveRequest = true;
        } 
      }
    });
    
    return allowedRoles;
  }
}