import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product/product.service';
import { Product } from '../services/product/product';


@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  product!: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, 
    private router: Router) { 
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.product = productService.getProductById(params['id'])
    })
  }

  ngOnInit(): void {
    
  }

 

}
