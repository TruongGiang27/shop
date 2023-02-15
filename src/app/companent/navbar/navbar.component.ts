import { Component, OnInit } from '@angular/core';
import { TshirtService } from 'src/service/tshirt.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


 constructor(public tshirtSrvc : TshirtService){
 }


}