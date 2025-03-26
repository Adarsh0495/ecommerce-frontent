import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.Service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(    private authService: AuthService,private router:Router){}

  ngOnInit(): void {
    this.authService.showSearchBox=false
    this.authService.showCart=false
  }
  logout(){
    this.authService.logout()
this.router.navigate(['/signup'])
  }
}
