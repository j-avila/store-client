import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  items: any[]
  order: any[]

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  makeBuy(status: number, total_price: number) {
    interface status {
      main: string,
      [key: string]: any,
    }

    this.order = { ...this.items, status: 1, total_price: 999 }
    this.cartService.checkout(this.order)

    console.log('purchased:', this.order)
    window.alert('buy successfull!')
    this.items = []
  }

  removeItem(pos: number) {
    this.items = this.cartService.removeItem((pos))
    console.log(pos)
  }

  clearCart() {
    this.items = []
    this.cartService.clearCart()
  }

}