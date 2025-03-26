import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs/internal/Observable";
import { product } from "../Models/products.model";
import { map } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ProductsService{

  constructor(private http: HttpClient, private toast: ToastrService) {}

  addProduct(formData: FormData): Observable<product> {
    return this.http.post<product>('http://localhost:8080/api/admin/product/add',formData);
  }

  getAllProducts(): Observable<product[]> {
    return this.http.get<product[]>('http://localhost:8080/api/user/products')  
  }

  deleteProduct(id:number):Observable<string>{
    return this.http.delete<string>(`http://localhost:8080/api/admin/product/delete/${id}`,{ responseType: 'text' as 'json'});
  }

  searchProducts(searchTerm: string):Observable<product[]> {
     return this.http.get<product[]>(`http://localhost:8080/api/user/products/search?keyword=${encodeURIComponent(searchTerm)}`)
  }
  
  updateProducts(productId: number, formData: FormData): Observable<product> {
    return this.http.put<product>(`http://localhost:8080/api/admin/product/update/${productId}`, formData);
  }

  getProductById(id: number): Observable<product> {
    return this.http.get<product>(`http://localhost:8080/api/admin/product/${id}`)
  }

  getProductByIdForUser(id: number): Observable<product> {
    return this.http.get<product>(`http://localhost:8080/api/user/product/${id}`)
  }

  getProductByCategory(category:string):Observable<product[]>{
    return this.http.get<product[]>(`http://localhost:8080/api/user/products/${category}`)
  }


} 

