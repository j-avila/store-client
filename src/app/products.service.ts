import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = []
  constructor(private http: HttpClient) { }
  getItems() {
    return this.http.get(`${environment.server}/products`)
  }

  getItemById(id: number) {
    console.log(this.http.get(`${environment.server}/products${id}`))
    return this.http.get(`${environment.server}/products/${id}`)
  }

}
