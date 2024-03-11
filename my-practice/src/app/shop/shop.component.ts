import { Component } from '@angular/core';
import { Products } from '../shop/shop.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  page: number = 1;
  limit: number = 10;
  url: string = `https://dummyjson.com/products?skip=${this.page}&limit=${this.limit}`;
  products: Products[] = [];

  constructor() {
    ;
  }

  getProducts() {
    this.url = `https://dummyjson.com/products?skip=${this.page}&limit=${this.limit}`

    fetch(this.url)
      .then(res => res.json())
      .then(json => {
        this.products = json.products;
      });

    console.log(this.page);
    return this.products;
  }

}
