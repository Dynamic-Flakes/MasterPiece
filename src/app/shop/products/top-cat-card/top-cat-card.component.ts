import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-cat-card',
  templateUrl: './top-cat-card.component.html',
  styleUrls: ['./top-cat-card.component.css']
})
export class TopCatCardComponent implements OnInit {
  topCats = [];

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productService.getTopCategories().subscribe(
      tpCats => { this.topCats = tpCats }
    )
  }

}
