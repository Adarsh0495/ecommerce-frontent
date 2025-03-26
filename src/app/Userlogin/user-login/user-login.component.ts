import { HttpErrorResponse } from "@angular/common/http";
import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/Core/Service/auth.Service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  @ViewChild('loginform') loginform: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: ToastrService
  ) {}

  loginSubmit() {
    if (this.loginform.valid) {
      const loginData = {
        username: this.loginform.value.userid,
        password: this.loginform.value.password
      };
      this.authService.login(loginData).subscribe({
        next: (response: any) => {
          if (response.role !== 'ROLE_USER') {
            this.toast.error('Only users can log in here. Try admin login.');
            return;
          }
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);
          console.log('Stored in localStorage:', { token: response.token, role: response.role });
          this.authService.isLogged = true;
          this.router.navigate(['/home']);
          this.toast.success('User login successful.');
          this.loginform.reset();
        },
        error: (error: HttpErrorResponse) => {
          console.error('User Login Error:', error);
          if (error.status === 401) {
            this.toast.error('Invalid username or password.');
          } else {
            this.toast.error('Login failed: ' + (error.error || 'Unknown error'));
          }
        }
      });
    } else {
      this.toast.error('Please fill all the fields.');
    }
  }
}