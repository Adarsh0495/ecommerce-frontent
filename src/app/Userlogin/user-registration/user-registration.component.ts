import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Core/Service/auth.Service';
import { ToastrService } from 'ngx-toastr';
import { user } from 'src/app/Core/Models/user.model';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  @ViewChild('signupForm') signupForm: NgForm; // Reference to the form
  user: user = { username: '', email: '', password: '' }; // Model for two-way binding

  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: ToastrService
  ) {}

  onFormSubmitted() {
    if (this.signupForm.valid) {
      const signUpData = {
        username: this.signupForm.value.username, 
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      };   
         console.log('Signup Data:', signUpData);

      this.authService.signup(signUpData).subscribe({
        next: (res) => {
          console.log('Response:', res);

          this.toast.success('Signup successful!');
          this.router.navigate(['/login']);
          this.signupForm.resetForm(); 
        },
        error: (err) => {
          console.error('Signup Error:', err);
          this.toast.error(err.error?.error || 'Signup failed');
        }
      });
    } else {
      this.toast.error('Please fill in all required fields.');
    }
  }
}