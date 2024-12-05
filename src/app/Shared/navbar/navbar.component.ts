import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../Core/Service/user.service';

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
  constructor(private userservice:UserService){}
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

ngOnInit(): void {
  this.showSearchBox=this.userservice.showSearchBox
  this.showCart=this.userservice.showCart;
  this.loggedIn=this.userservice.isLogged;
  console.log(this.searchData);
  
}
  onsearchTextChanged(){
this.searchTextChanged.emit(this.searchData)


  }

  logout(){
    alert('logout succesfully')
  }
}
