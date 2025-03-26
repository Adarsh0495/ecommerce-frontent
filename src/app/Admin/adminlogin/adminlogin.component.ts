import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Core/Service/auth.Service';
import { HttpErrorResponse } from '@angular/common/http';
import { AdminService } from 'src/app/Core/Service/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  @ViewChild('loginform') adminForm: NgForm;

  constructor(
    private router: Router,
    private toast: ToastrService,
    private adminService: AdminService,
  ) {}

  loginsubmit(): void {
    if (this.adminForm.valid) {
      const data = {
        username: this.adminForm.value.userid,
        password: this.adminForm.value.password
      };
      console.log('Admin Login Data:', data);

      this.adminService.adminLogin(data).subscribe({
        next: (response: any) => {
          console.log('Admin Login Response:', response);
          const userRole = response.role === 'ADMIN' ? 'ROLE_ADMIN' : response.role; // Normalize
          console.log('Role Check:', userRole, '=== ROLE_ADMIN ?', userRole === 'ROLE_ADMIN');
          if (userRole !== 'ROLE_ADMIN') {
            this.toast.error('Only admins can log in here. Try user login.');
            return;
          }
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', userRole);
          console.log('Stored in localStorage:', { token: response.token, role: userRole });
          this.router.navigate(['/adminhome']);
          this.toast.success('Admin login successful.');
          this.adminForm.reset();
        },
        error: (error: HttpErrorResponse) => {
          console.error('Admin Login Error:', error);
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