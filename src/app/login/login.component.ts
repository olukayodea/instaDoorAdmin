import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ErrorCodes } from '../_models/data';
import { ApiService } from './../_services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  routeParams: Params;
  queryParams: Params;

  errorCodes: ErrorCodes;
  redirect: string;
  error_message: string;
  error: string;
  errorMsg: boolean;
  buttonText: string = "Sign In";
  processing: true | false = false;
  
  success: string;
  successMsg: boolean;

  isLoggedIn: string;


  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.errorCodes = new ErrorCodes();
    this.getRouteParams();
  }

  ngOnInit(): void {
    if (localStorage.getItem('route') === null) {
      localStorage.setItem('route', "home");
    }

    if (this.routeParams['done'] !== undefined) {
      this.successMsg = true;
      this.success = this.errorCodes["en"][this.routeParams['done']];
    }

    if (this.routeParams['error'] !== undefined) {
      this.errorMsg = true;
      this.error = this.errorCodes["en"][this.routeParams['error']];
    }
  }

  onSubmit() {
    if(this.loginForm.invalid) {
      return;
    }

    this.login(this.loginForm.value.email, this.loginForm.value.password, this.loginForm.value.remember);
  }

  // Store parameter values on URL changes
  getRouteParams() {
    // Route parameters
    this.activatedRoute.params.subscribe( params => {
        this.routeParams = params;
    });

    // URL query parameters
    this.activatedRoute.queryParams.subscribe( params => {
        this.queryParams = params;
    });
  }

  login(username: string, password: string, remember) {
    this.buttonText = "Signing In";
    this.processing = true;
    this.apiService.login(username, password).subscribe(
      user => {
        if (user.success == true) {
          // Save user to Local storage
          localStorage.setItem('token', user.token);
          localStorage.setItem('userData', JSON.stringify(user.data));

          this.redirect = localStorage.getItem('route');
          var extension = Math.floor(60*10)
          var currentTimeInSeconds = Math.floor((Date.now() / 1000) + extension);
          localStorage.setItem('remember', currentTimeInSeconds.toString());
          this.router.navigate(['/'+this.redirect]);
        } else {
          this.errorMsg = true;
          this.error = this.errorCodes["en"][user.error.code];
          this.buttonText = "Sign In";
          this.processing = false;
        }
      }
    );
  }

}
