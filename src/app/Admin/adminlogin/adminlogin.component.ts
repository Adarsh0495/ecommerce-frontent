import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
@ViewChild('loginform')adminForm:NgForm

constructor(private router:Router,private toast:ToastrService){}
loginsubmit(){
if(this.adminForm){
  let userid:string=this.adminForm.value.userid
  let password:number=this.adminForm.value.password
  if(userid=='admin' && password==321){
this.router.navigate(['/adminhome'])
this.toast.success('Admin login success.')
  }else{
    this.toast.warning('Invalid userid or password.')
  }
}else{
  this.toast.error('please fill in requied field.')
}
this.adminForm.reset()
}

}
