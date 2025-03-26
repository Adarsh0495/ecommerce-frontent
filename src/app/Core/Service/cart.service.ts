// src/app/Core/Service/cart.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../Models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {}

  
  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`http://localhost:8080/api/user/cart/get`);
  }

  addItemToCart(productId: number, quantity: number): Observable<CartItem[]> {
    const params=new HttpParams()
    .set('productId',productId.toString())
    .set('quantity',quantity.toString())
    return this.http.post<CartItem[]>(`http://localhost:8080/api/user/cart/add`,null,{params});
  }

  updateCartItemQuantity(cartId:number,quantity:number):Observable<CartItem[]>{
    const params=new HttpParams().set('quantity',quantity.toString())

    return this.http.put<CartItem[]>(`http://localhost:8080/api/user/cart/update/${cartId}`,null,{params});
  }

  deleteCartItem(cartId: number): Observable<CartItem[]> {
    return this.http.delete<CartItem[]>(`http://localhost:8080/api/user/cart/delete/${cartId}`);
  }

  clearCart(): Observable<CartItem[]> {
    return this.http.delete<CartItem[]>(`http://localhost:8080/api/user/cart/delete-all`);
  }


 

 
}