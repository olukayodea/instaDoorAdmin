import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorCodes } from '../_models/data';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  errorCodes: ErrorCodes;
  redirect: string;
  error_message: string;
  error: string;
  errorMsg: boolean;
  buttonText: string = "Recover";
  processing: true | false = false;

  loginForm = this.fb.group({
    email: ['', Validators.required]
  });

  get email() { return this.loginForm.get('email'); }
  
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

    this.recover(this.loginForm.value.email);
  }

  recover( email: string) {
    this.buttonText = "Sending...";
    this.processing = true;
    this.apiService.requestPassword(email).subscribe(
      user => {
        if (user.success == true) {
          localStorage.setItem("resetToken", user.resetToken);
          this.router.navigate(['/passwordReset']);
        } else {
          this.errorMsg = true;
          this.error = this.errorCodes["en"][user.error.code];
          this.buttonText = "Recover";
          this.processing = false;
        }
      }
    );
  }

}
