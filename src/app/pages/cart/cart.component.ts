import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TshirtService } from 'src/service/tshirt.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {



  constructor(public tshirtSrvc : TshirtService){}
  
}
