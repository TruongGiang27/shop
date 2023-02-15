import { Component } from '@angular/core';
import { TshirtService } from 'src/service/tshirt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public tshirtSrvc : TshirtService){}
}
