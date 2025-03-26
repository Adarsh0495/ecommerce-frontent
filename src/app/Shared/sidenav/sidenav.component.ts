import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Core/Service/admin.service';
import { AuthService } from 'src/app/Core/Service/auth.Service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  isSideBarCollapsed: boolean = false
constructor(private router:Router,private route:Router,private authService:AuthService){}
  toggleSideBar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
    
    if (this.isSideBarCollapsed) {
       this.isSideBarCollapsed = true }

  }
  adminLogout(): void { // Line 24
    this.authService.logout().subscribe({
      next: () => {
        console.log('Logout successful');
        this.authService.clearSession();
        this.route.navigate(['/login']);
      },
      error: (err) => {
        console.error('Logout error:', err); // Line 30
        this.authService.clearSession();
        this.route.navigate(['/login']);
      }
    });
  }
}
