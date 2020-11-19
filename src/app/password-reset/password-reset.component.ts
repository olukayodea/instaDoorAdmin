import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorCodes } from '../_models/data';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  errorCodes: ErrorCodes;
  redirect: string;
  error_message: string;
  error: string;
  errorMsg: boolean;
  buttonText: string = "Reset";
  processing: true | false = false;

  loginForm = this.fb.group({
    otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  });

  get otp() { return this.loginForm.get('otp'); }
  get password() { return this.loginForm.get('password'); }
  get confirmPassword() { return this.loginForm.get('confirmPassword'); }
  
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.errorCodes = new ErrorCodes();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.loginForm.invalid) {
      return;
    }

    var data: object = {
      otp: this.loginForm.value.otp,
      password: this.loginForm.value.password
    };
    this.recover(data);
  }

  recover( data ) {
    this.buttonText = "Reseting...";
    this.processing = true;
    
    this.apiService.resetPassword(data).subscribe(
      user => {
        this.processing = false
        if (user.success == true) {
          localStorage.removeItem('resetToken');
          this.router.navigate(['/login/done/21000']);
        } else {
          this.errorMsg = true;
          this.error = this.errorCodes["en"][user.error.code];

          this.buttonText = "Reset";
        }
      }
    );
  }

}
