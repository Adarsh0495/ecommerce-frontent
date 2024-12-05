import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  isSideBarCollapsed: boolean = false
constructor(private router:Router){}
  toggleSideBar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
    if (this.isSideBarCollapsed) { this.isSideBarCollapsed = true }

  }
  adminSignOut() {
    localStorage.removeItem('adminToken')
    this.router.navigate(['/adminlog'])
  }
}
