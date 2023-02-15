import { Component } from '@angular/core';
import { TshirtService} from '../../../service/tshirt.service'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor(public tshirtSrvc : TshirtService){
  }
  
}
