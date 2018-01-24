import {Component} from '@angular/core';
import {customers} from './data/customers';
import {products} from './data/products';
import {columnsDefinition as customerColumnsDefinition} from './data/customer-columns';
import {columnsDefinition as productColumnsDefinition} from './data/product-columns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  customers = customers;
  products = products;
  customerColumnsDefinition = customerColumnsDefinition;
  productColumnsDefinition = productColumnsDefinition;
}
