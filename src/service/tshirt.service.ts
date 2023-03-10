import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TshirtService {

  constructor() { }


  total =0;
  cart:any[] = []
  addToCart(item: any): void{
    if(this.cart.length === 0){
      this.cart.push(item);
      console.log(this.cart);
    }else{
      for(let i = 0; i < this.cart.length; i++){
        if(this.cart[i].id === item.id){
          this.cart[i].quantity ++;
          console.log(this.cart);
          return;
        }
      }
      this.cart.push(item);
      console.log(this.cart);
    }
  }

  purchase(){
    let subtotal = 0;
    for(let i = 0; i < this.cart.length; i++){
      subtotal += (this.cart[i].price * this.cart[i].quantity);
    }
    this.total = subtotal;
  }

  shop = [
    {
      id: 1,
      name: "ALL NIGHT LONG",
      img: 'https://product.hstatic.net/200000239547/product/z4070093170690_8135363f15e43df51018eec6b906f49c_4e9150373853448584deee36bdb6b2ed_1024x1024.jpg',
      information: 'Chất liệu vải ford cao cấp, chất vải mềm mịn không bị nhàu',
      price: 350000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 2,
      name: "YOKO",
      img: 'https://product.hstatic.net/200000239547/product/yoko_5a03305e96904a2ba763b5bb8748139f_1024x1024.png',
      information: 'Chất liệu : Vải Tweed,Chất liệu bền bỉ, dày dặn',
      price: 420000,
      sell: 'Sold Out',
      quantity: 1,
    },
    {
      id: 3,
      name: "MEOW MEOW",
      img: 'https://product.hstatic.net/200000239547/product/yfcn8wh3-1-y8wi-hinh_mat_truoc-0_840a6078bdca4029bd0dc382515f11bb_1024x1024.jpg',
      information: 'Chất liệu vải ford cao cấp, chất vải mềm mịn không bị nhàu',
      price: 420000,
      sell: 'Sold Out',
      quantity: 1,
    },
    {
      id: 4,
      name: "TWIW GILE",
      img: 'https://product.hstatic.net/200000239547/product/z4027557771891_9c785e40849fcf84ff587974eb125fbd_60b78716a46147d1a3ced084495f0369_1024x1024.jpg',
      information: 'Với chất liệu sợi dệt kim, nhẹ, mềm, có độ co giãn và đàn hồi tốt ',
      price: 420000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 5,
      name: "NOT BAD",
      img: 'https://product.hstatic.net/200000239547/product/dsdv_7f7d5df574434ba68f89fde1c8c731bd_1024x1024.jpg',
      information: 'Chất liệu vải ford cao cấp, chất vải mềm mịn không bị nhàu',
      price: 330000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 6,
      name: "BASIC LONG SLEEVE SHIRT",
      img: 'https://product.hstatic.net/200000239547/product/z4027625781672_dd3ecdcc436be29533dae4b27168419b_d6608ef5f9e04af4a552ba02d2b86972_1024x1024.jpg',
      information: 'Chất liệu vải ford kate cao cấp thoáng mát, vải mềm mịn, thấm hút mồ hôi tốt',
      price: 380000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 7,
      name: "CROCODILE",
      img: 'https://product.hstatic.net/200000239547/product/crocodile_e7fc12cf06d64bf08a4f139d793ce3a4_1024x1024.jpg',
      information: 'Chất liệu : Vải Tweed, Chất liệu bền bỉ, dày dặn',
      price: 420000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 8,
      name: "THE SQUARE",
      img: 'https://product.hstatic.net/200000239547/product/the-square_2e4bcb8fe5bd43a7956ad91cd380bbe0_1024x1024.jpg',
      information: 'Chất liệu Kaki được dập chìm tạo cảm giác lạ mắt,Vải cứng giúp giữ form áo ',
      price: 350000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 9,
      name: "2 POCKET ON SHIRT",
      img: 'https://product.hstatic.net/200000239547/product/2-pocket_7fe14cef50254252a9e71043c9c925ff_1024x1024.jpg',
      information: 'Vải có khả năng hút ẩm tốt, thoáng mát do có thành phần từ sợi cotton. ',
      price: 370000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 10,
      name: "DIAMOND",
      img: 'https://product.hstatic.net/200000239547/product/z4047418381392_a35a678fee28b6cd2e9266184bc18f54_b4210823c8144b8684d042fb0c054eea_1024x1024.jpg',
      information: 'Chất liệu dệt kim cao cấp, chất vải không bị nhàu',
      price: 360000,
      sell: 'Sold Out',
      quantity: 1,
    },
    {
      id: 11,
      name: "BASIC LONG SLEEVE SHIRT",
      img: 'https://product.hstatic.net/200000239547/product/z4027625781672_dd3ecdcc436be29533dae4b27168419b_d6608ef5f9e04af4a552ba02d2b86972_1024x1024.jpg',
      information: 'Chất liệu vải ford kate cao cấp thoáng mát, vải mềm mịn, thấm hút mồ hôi tốt',
      price: 380000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 12,
      name: "GOD 20",
      img: 'https://product.hstatic.net/200000239547/product/god20_55e56e1522d44be69066349469a14cfc_1024x1024.png',
      information: 'Chất liệu vải ford cao cấp, chất vải mềm mịn không bị nhàu',
      price: 350000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 13,
      name: "ALL NIGHT LONG",
      img: 'https://product.hstatic.net/200000239547/product/z4070093170690_8135363f15e43df51018eec6b906f49c_4e9150373853448584deee36bdb6b2ed_1024x1024.jpg',
      information: 'Chất liệu vải ford cao cấp, chất vải mềm mịn không bị nhàu',
      price: 350000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 14,
      name: "ALL NIGHT LONG",
      img: 'https://product.hstatic.net/200000239547/product/z4070093170690_8135363f15e43df51018eec6b906f49c_4e9150373853448584deee36bdb6b2ed_1024x1024.jpg',
      information: 'Chất liệu vải ford cao cấp, chất vải mềm mịn không bị nhàu',
      price: 350000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 15,
      name: "ALL NIGHT LONG",
      img: 'https://product.hstatic.net/200000239547/product/z4070093170690_8135363f15e43df51018eec6b906f49c_4e9150373853448584deee36bdb6b2ed_1024x1024.jpg',
      information: 'Chất liệu vải ford cao cấp, chất vải mềm mịn không bị nhàu',
      price: 350000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 16,
      name: "ALL NIGHT LONG",
      img: 'https://product.hstatic.net/200000239547/product/z4070093170690_8135363f15e43df51018eec6b906f49c_4e9150373853448584deee36bdb6b2ed_1024x1024.jpg',
      information: 'Chất liệu vải ford cao cấp, chất vải mềm mịn không bị nhàu',
      price: 350000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 17,
      name: "ALL NIGHT LONG",
      img: 'https://product.hstatic.net/200000239547/product/z4070093170690_8135363f15e43df51018eec6b906f49c_4e9150373853448584deee36bdb6b2ed_1024x1024.jpg',
      information: 'Chất liệu vải ford cao cấp, chất vải mềm mịn không bị nhàu',
      price: 350000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 18,
      name: "ALL NIGHT LONG",
      img: 'https://product.hstatic.net/200000239547/product/z4070093170690_8135363f15e43df51018eec6b906f49c_4e9150373853448584deee36bdb6b2ed_1024x1024.jpg',
      information: 'Chất liệu vải ford cao cấp, chất vải mềm mịn không bị nhàu',
      price: 350000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 19,
      name: "ALL NIGHT LONG",
      img: 'https://product.hstatic.net/200000239547/product/z4070093170690_8135363f15e43df51018eec6b906f49c_4e9150373853448584deee36bdb6b2ed_1024x1024.jpg',
      information: 'Chất liệu vải ford cao cấp, chất vải mềm mịn không bị nhàu',
      price: 350000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 20,
      name: "ALL NIGHT LONG",
      img: 'https://product.hstatic.net/200000239547/product/z4070093170690_8135363f15e43df51018eec6b906f49c_4e9150373853448584deee36bdb6b2ed_1024x1024.jpg',
      information: 'Chất liệu vải ford cao cấp, chất vải mềm mịn không bị nhàu',
      price: 350000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 21,
      name: "ALL NIGHT LONG",
      img: 'https://product.hstatic.net/200000239547/product/z4070093170690_8135363f15e43df51018eec6b906f49c_4e9150373853448584deee36bdb6b2ed_1024x1024.jpg',
      information: 'Chất liệu vải ford cao cấp, chất vải mềm mịn không bị nhàu',
      price: 350000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 21,
      name: "ALL NIGHT LONG",
      img: 'https://product.hstatic.net/200000239547/product/z4070093170690_8135363f15e43df51018eec6b906f49c_4e9150373853448584deee36bdb6b2ed_1024x1024.jpg',
      information: 'Chất liệu vải ford cao cấp, chất vải mềm mịn không bị nhàu',
      price: 350000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 21,
      name: "ALL NIGHT LONG",
      img: 'https://product.hstatic.net/200000239547/product/z4070093170690_8135363f15e43df51018eec6b906f49c_4e9150373853448584deee36bdb6b2ed_1024x1024.jpg',
      information: 'Chất liệu vải ford cao cấp, chất vải mềm mịn không bị nhàu',
      price: 350000,
      sell: 'Còn hàng',
      quantity: 1,
    },
    {
      id: 21,
      name: "ALL NIGHT LONG",
      img: 'https://product.hstatic.net/200000239547/product/z4070093170690_8135363f15e43df51018eec6b906f49c_4e9150373853448584deee36bdb6b2ed_1024x1024.jpg',
      information: 'Chất liệu vải ford cao cấp, chất vải mềm mịn không bị nhàu',
      price: 350000,
      sell: 'Còn hàng',
      quantity: 1,
    },

  ]
  




}
