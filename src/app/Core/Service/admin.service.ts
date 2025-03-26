import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { user } from '../Models/user.model';
import { HttpClient } from '@angular/common/http';
import { product } from '../Models/products.model';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor( private http: HttpClient) {}

    adminLogin(data: any): Observable<any> {
        return this.http.post('http://localhost:8080/api/login', data);
    }

    getAllUsers(): Observable<user[]> {
        return this.http.get<user[]>('http://localhost:8080/api/admin/users')
    }

    getAllProducts():Observable<product[]>{
        return this.http.get<product[]>('http://localhost:8080/api/admin/products')
    }
    
}