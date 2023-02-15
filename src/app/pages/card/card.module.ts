import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    ShareModule
  ]
})
export class CardModule {
  
 }
