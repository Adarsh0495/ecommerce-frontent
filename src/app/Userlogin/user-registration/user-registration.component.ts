import { Component, inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Core/Service/user.service';
import { ToastrService } from 'ngx-toastr';
import { user } from 'src/app/Core/Models/user.model';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  @ViewChild('signupform') signupform: NgForm;
  userSignupDatas: user[] = [];
  constructor(private router: Router, private userservice: UserService, private toast: ToastrService) { }
  registerUser() {
    if (this.signupform.valid) {
      this.userSignupDatas = this.signupform.value
      const signUpDats: user = this.signupform.value;
      signUpDats.role = "user"
      this.userservice.signupUser.push(signUpDats);
      this.userservice.signup()
      this.toast.success('signup successful!');
      this.router.navigate(['/login'])
      this.signupform.reset()

    } else {
      this.toast.error('please fill in the required fields.');
    }
  }
}

