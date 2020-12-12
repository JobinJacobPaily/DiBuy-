import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
//import { RegisterPage } from '../register/register.page';
import { Router } from '@angular/router';
//import { WishlistPage } from '../wishlist/wishlist.page';
import { ViewItemPage } from '../view-item/view-item.page';
import { WishListPage } from '../wish-list/wish-list.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  dumy: any = [
    {
      ProductName: 'Product1', CompanyName: 'Company1', imgurl: 'assets/product.png',
      detail: [{ details: 'detail1', value: 'value1' },
      { details: 'detail2', value: 'value2' }]
    },
    {
      ProductName: 'Product2', CompanyName: 'Company2', imgurl: 'assets/product.png',
      detail: [{ details: 'detail1', value: 'value1' },
      { details: 'detail2', value: 'value2' }]
    },
    {
      ProductName: 'Product3', CompanyName: 'Company3', imgurl: 'assets/product.png',
      detail: [{ details: 'detail', value: 'value1' },
      { details: 'detail2', value: 'value2' }]
    },
    {
      ProductName: 'Product4', CompanyName: 'Company4', imgurl: 'assets/product.png',
      detail: [{ details: 'detail1', value: 'value1' },
      { details: 'detail2', value: 'value2' }]
    },
    {
      ProductName: 'Product5', CompanyName: 'Company5', imgurl: 'assets/product.png',
      detail: [{ details: 'detail5', value: 'value5' },
      { details: 'detail5', value: 'value5' }]
    },
    {
      ProductName: 'Product6', CompanyName: 'Company6', imgurl: 'assets/product.png',
      detail: [{ details: 'detail6', value: 'value6' },
      { details: 'detail6', value: 'value6' }]
    },
    {
      ProductName: 'Product7', CompanyName: 'Company7', imgurl: 'assets/product.png',
      detail: [{ details: 'detail7', value: 'value7' },
      { details: 'detail7', value: 'value7' }]
    }
  ]

  dumy2: any = this.dumy;


  constructor(private modalctrl: ModalController, 
    private router: Router,
    private camera:Camera) { }



  image:any=''
  openCam(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     //alert(imageData)
     this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
     // Handle error
     console.log(err);
     alert("error "+JSON.stringify(err))
    });

  }

   login()
   {
     this.router.navigate(['login']);
   }
  initialise() {
    this.dumy2 = this.dumy;
  }

  filterlist(evt) {
    this.initialise();

    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.dumy2 = this.dumy2.filter(currentGoal => {
      if (currentGoal.ProductName && searchTerm) {
        if (currentGoal.ProductName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }
  async viewitem(x) {
    const view = await this.modalctrl.create({
      component: ViewItemPage,
      componentProps: { dumy2: x ,
                         bol:true}
    });
    await view.present();

  }

  async loginmodal() {
    const login = await this.modalctrl.create({
      component: LoginPage,
      componentProps:{
        flag:true
      }
    });
    await login.present();
  }
  async wishModal() {
    const wish = await this.modalctrl.create({
      component: WishListPage
    });
    await wish.present();

  }


  cart() {
    this.router.navigate(['cart']);
  }

  ngOnInit() {
  }

}
