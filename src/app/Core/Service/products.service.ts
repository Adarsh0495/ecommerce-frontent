import { Injectable } from "@angular/core";
import { product } from "../Models/products.model";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn:'root'
})
export class ProductsService{

allProducts:product[]=[
    { productid: 7,  type: `Adidas`, productname: 'Adidas Gazelle Sneakers For Men', productprice: 7999, productimage: './../assets/images/adidas/3SdAnYJa23YcRTxCaYbdFn-1024-80.jpg (1).jpg', quantity: 1 ,isDeleted: false},
    { productid: 8,  type: `Adidas`, productname: 'Adidas Iniki Runners For Men', productprice: 4999, productimage: './../assets/images/adidas/5dc7d3a1f814ba3ca1770a1ec45af8ca.jpg', quantity: 1,isDeleted: false },
    { productid: 9,  type: `Adidas`, productname: 'Adidas Courun Avant Running Shoes', productprice: 6999, productimage: './../assets/images/adidas/61tOEA5w+8L._SY695_.jpg', quantity: 1 ,isDeleted: false},
    { productid: 1,  type: `Adidas`, productname: 'Adidas Continental 80 Sneakers ', productprice: 3999, productimage: './../assets/images/adidas/card-large-item12.jpg', quantity: 1,isDeleted: false },
    { productid: 2,  type: `Adidas`, productname: 'Adidas Samba ', productprice: 7999, productimage: './../assets/images/adidas/nC2Dui6GjLRa9aqB62bcAe-1024-80.jpg.jpg', quantity: 1 ,isDeleted: false},
    { productid: 3,  type: `Nike`, productname: 'Nike Air Jordan Luka', productprice: 8999, productimage: './../assets/images/nike/51ueP2RKMOL._SY695_.jpg', quantity: 1 ,isDeleted: false},
    { productid: 4,  type: `Nike`, productname: 'Nike Air Max',  productprice: 2499, productimage: './../assets/images/nike/71dLeLAFBGL._SX695_.jpg', quantity: 1,isDeleted: false },
    { productid: 5,  type: `Nike`, productname: 'Nike Air Winflo-11', productprice: 17999, productimage: './../assets/images/nike/81IOFPa9aOL._SX695_.jpg', quantity: 1,isDeleted: false },
    { productid: 6,  type: `Nike`, productname: 'Nike Air Max-90', productprice: 17999, productimage: './../assets/images/nike/sneakers-nike-air-max-90-white-university-gold-midnight-navy-306729-1080s-1.webp', quantity: 1,isDeleted: false },
    { productid: 10, type: `Nike`, productname: 'Nike Air Force Sage', productprice: 6500, productimage: './../assets/images/nike/card-large-item6.jpg', quantity: 1,isDeleted: false },
    { productid: 11, type: `Nike`, productname: 'Nike Air Force', productprice: 17999, productimage: './../assets/images/nike/card-large-item11.jpg', quantity: 1,isDeleted: false },
    { productid: 12, type: `Nike`, productname: 'Nike Air jordan', productprice: 17999, productimage: './../assets/images/nike/card-image1.jpg', quantity: 1 ,isDeleted: false},
    { productid: 13, type: `Converse`,productname:'Converse Chuck Taylor', productprice: 16799, productimage: './../assets/images/converse/41fMzbVnzML._SY695_.jpg', quantity: 1,isDeleted: false },
    { productid: 14, type: `Converse`, productname: `Converse All Star`, productprice: 28750, productimage: './../assets/images/converse/51gdrCOpARL._SY695_.jpg', quantity: 1,isDeleted: false },
    { productid: 15, type: `Converse`, productname: `Converse All Star Construct`, productprice: 21150, productimage: './../assets/images/converse/51QHAlpraDL._SY695_.jpg', quantity: 1 ,isDeleted: false},
    { productid: 16, type: `Converse`, productname: 'Converse Chunk Taylor',  productprice: 16689, productimage: './../assets/images/converse/61M8uqwfurL._SY695_.jpg', quantity: 1,isDeleted: false },
    { productid: 17, type: `Converse`, productname: `Converse All Star Chunk Taylo`, productprice: 16999, productimage: './../assets/images/converse/512WogYKKZL._SY695_.jpg', quantity: 1 ,isDeleted: false},
    { productid: 18, type: `Converse`, productname: `Converse All Star Chunk Taylo`, productprice: 16999, productimage: './../assets/images/converse/560845c_01.jpg', quantity: 1,isDeleted: false },
    { productid: 19, type: `Converse`, productname: `Converse All Star Chunk Taylo`, productprice: 16999, productimage: './../assets/images/converse/download.jpg', quantity: 1,isDeleted: false },
    { productid: 20, type: `Other`, productname: `Loafer Faux Leather Fabric For Men`, productprice: 16999, productimage: './../assets/images/othrs/mens-shoes-875950_640.jpg', quantity: 1 ,isDeleted: false},
    { productid: 21, type: `Other`, productname: `New Balance for men`, productprice: 16999, productimage: './../assets/images/othrs/newbalance.png', quantity: 1 ,isDeleted: false},
    { productid: 22, type: `Other`, productname: `Vans men sheo`, productprice: 16999, productimage: './../assets/images/othrs/Vans.png', quantity: 1 ,isDeleted: false},

]
constructor(private toast:ToastrService){}
// getAllProducts(){
//      return this.allProducts

// }

searchProducts(searchTerm:string){
return this.allProducts
.filter(product=>product.productname.toLowerCase().includes(searchTerm.toLowerCase()) && 
product.isDeleted!==true)
}

deleteProduct(productId: number): void {
    const index = this.allProducts.findIndex(product => product.productid === productId)
    if (index !== -1) {
      this.allProducts.splice(index, 1)
      this.toast.show("Product Deleted")
    }
  }

  updateProducts(productId: number, updatedProduct: product): void {
    const index = this.allProducts.findIndex(product => product.productid == productId)
    
    if (index !== -1) {
      this.allProducts[index] = { ...updatedProduct }
      
      this.toast.success("Product Updated")
    }else{
      console.error(`Product with ID ${productId} not found in the list.`);
      this.toast.error("Something went wrong.")
    }
  }


}