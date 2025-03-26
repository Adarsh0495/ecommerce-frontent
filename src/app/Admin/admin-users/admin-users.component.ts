// src/app/admin-users/admin-users.component.ts
import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Core/Models/user.model';
import { AdminService } from 'src/app/Core/Service/admin.service';

@Component({
    selector: 'app-admin-users',
    templateUrl: './admin-users.component.html',
    styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
    isSideBarCollapsed: boolean = false;
    adminUsers: user[] = [];
    isLoading: boolean = false;

    constructor(private adminService: AdminService) {}

    ngOnInit(): void {
        this.loadUsers();
    }

    loadUsers(): void {
        this.isLoading = true;
        this.adminService.getAllUsers().subscribe({
            next: (users) => {
                this.adminUsers = users;
                this.isLoading = false;
                console.log('Users loaded:', this.adminUsers);
            },
            error: (err) => {
                this.isLoading = false;
                console.error('Error loading users:', err);
            }
        });
    }

    toggleSideBar(): void {
        this.isSideBarCollapsed = !this.isSideBarCollapsed;
    }
}