import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ProductsService } from '../products.service'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.productsService.getItemById(+params.get('productId')).subscribe(
          data => { this.product = data }
        )

      },
      err => {
        console.log(err)
      }
    )
  }

  addToCart(product) {
    this.cartService.addToCart(product)
    window.alert('your product has been added to the cart')
  }
}
