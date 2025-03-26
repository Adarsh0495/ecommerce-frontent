import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  console.log('authGuard - token:', token, 'role:', role);
  const router: Router = inject(Router);
  const toast: ToastrService = inject(ToastrService);

  if (token && role === 'ROLE_USER') {
    return true;
  } else {
    toast.error('User access only. Please log in as a user.');
    router.navigate(['/user-login']);
    return false;
  }
};

