import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { user } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  showSearchBox: boolean = false;
  showCart: boolean = false;
  isLogged: boolean = false;

  constructor(
    private http: HttpClient,
    private toast: ToastrService,
  ) { }


  signup(signUpData: user):Observable<any>{ 
    return this.http.post('http://localhost:8080/api/register',signUpData)
  }


  login(loginData): Observable<any> {
    return this.http.post('http://localhost:8080/api/login', loginData)
    
  }

  logout():Observable<any>{
    return this.http.post<any>(`http://localhost:8080/api/logout`,{},{ responseType: 'json' })
  }

  clearSession(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role')
    this.toast.success('Logged out successfully.');
    this.isLogged = false;
    this.showSearchBox = true;
    this.showCart = false;
  }


}