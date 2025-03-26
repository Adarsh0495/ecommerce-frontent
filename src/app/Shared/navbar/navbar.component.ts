import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../Core/Service/auth.Service';
import { ProductsService } from 'src/app/Core/Service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showSearchBox: boolean;
  showCart: boolean;
  loggedIn: boolean;
  searchData: string = '';
  constructor(private authService: AuthService,private productservice:ProductsService,private route:Router){}
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

ngOnInit(): void {
  this.showSearchBox=this.authService.showSearchBox
  this.showCart=this.authService.showCart;
  this.loggedIn=this.authService.isLogged;
  console.log(this.searchData);
  
}
  onsearchTextChanged(){
    this.searchTextChanged.emit(this.searchData)  
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.authService.clearSession();
        this.loggedIn = false;
        this.route.navigate(['/login']);
      },
      error: (err) => {
        console.error('Logout error:', err);
        this.authService.clearSession();
        this.loggedIn = false;
        this.route.navigate(['/login']);
      }
    });
  }
}
