import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { LoginPayload } from 'src/app/model/login-payload';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    invalidLogin = false;
    loginPayload: LoginPayload = new LoginPayload();
    @Input()
    error: string | null;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        
    }

    ngOnInit() {
      //window.localStorage.removeItem('token');
      this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    register() {
      this.router.navigate(['register-user']);
    }
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
       
          this.loginPayload.userName = this.f.userName.value;
          this.loginPayload.password = this.f.password.value;
        
        this.loading = true;
        this.authenticationService.login(this.loginPayload)
            .subscribe(
                data => {
                  if (data.status === 200) {
                    alert('Login Successfull!!!')
                  //   window.localStorage.setItem('token', data.result.token);
                  //   this.dataTransferService.setApiResponse(data);
                  // //  this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
                  //   if (data.result.role === Roles.Seller ) {
                  //   this.router.navigate(['seller/side-nav-list'], {skipLocationChange: true});
                  //  } else if (data.result.role === Roles.Admin) {
                  //   this.router.navigate(['admin/side-nav-list'], {skipLocationChange: true});
                  //  } else {
                  //   this.router.navigate(['buyer/home']);
                  //  }

                  // } else {
                  //   this.invalidLogin = true;
                  //   this.alertService.error(data.message);
                  // }
                  }
                },
                error => {
                  //  this.alertService.error(error);
                    this.loading = false;
                   // return this.loginForm.controls;
                  //  this.router.navigate(['login']);
                });
    }

}
