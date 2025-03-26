import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductUpdateService {

 private productUpdated=new Subject<void>();

 productUpdated$=this.productUpdated.asObservable();

 notifyProductUpdate():void{
  console.log('Notifying product update...');
  this.productUpdated.next();
 }

}

