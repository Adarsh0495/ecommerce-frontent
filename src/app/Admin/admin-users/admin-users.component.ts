import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Core/Models/user.model';
import { AdminService } from 'src/app/Core/Service/admin.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css'
})
export class AdminUsersComponent implements OnInit {
  isSideBarCollapsed:boolean=false
  adminUsers:user[]=[]
  constructor(private adminservice:AdminService){}
  
  ngOnInit(): void {
    this.adminUsers=this.adminservice.adminUser
    console.log(this.adminUsers);    
    
  }
  toggleSideBar(){
    this.isSideBarCollapsed=!this.isSideBarCollapsed
  }
}
