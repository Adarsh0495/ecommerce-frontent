import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

export const adminGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  console.log('adminGuard - token:', token, 'role:', role);
  const router: Router = inject(Router);
  const toast: ToastrService = inject(ToastrService);

  if (token && role === 'ROLE_ADMIN') {
    return true;
  } else {
    toast.error('Admin access only. Please log in as an admin.');
    router.navigate(['/admin-login']);
    return false;
  }
};