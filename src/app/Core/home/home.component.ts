import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private userservice:UserService,private router:Router){}

  ngOnInit(): void {
    this.userservice.showSearchBox=false
    this.userservice.showCart=false
  }
  logout(){
    this.userservice.logout()
this.router.navigate(['/signup'])
  }
}
