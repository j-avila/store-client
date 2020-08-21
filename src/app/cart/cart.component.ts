import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any[];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  makeBuy() {
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