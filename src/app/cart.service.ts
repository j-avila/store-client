import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(
    private http: HttpClient
  ) { }
  getItems() {
    return this.items;
  }

  addToCart(product) {
    this.items.push(product);
  }

  removeItem(pos) {
    this.items.filter((item, index) => index !== pos)
    return this.items
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  checkout(items: any[]) {
    this.http.post(`${environment.server}/carts/`, null).subscribe(
      data => {
        console.log(data.cart.id)
        this.http.post(`${environment.server}/products_cart/`, { cart_id: data.cart.id, products: items }).subscribe(
          response => {
            console.log('products', response)
          },
          err => {
            console.log(err)
          }
        )
        this.clearCart()
      },
      err => {
        console.log(err)
      }
    )
  }
}