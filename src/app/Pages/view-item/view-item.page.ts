import { Component, OnInit, Injector } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.page.html',
  styleUrls: ['./view-item.page.scss'],
 
})
export class ViewItemPage implements OnInit {

  bol;
  dumy2;
   dumy1 :any=[];
  constructor(private madal:ModalController,private router:Router) {}

  dismiss()
  {
    if(this.bol)
       return this.madal.dismiss();
    this.router.navigate(['home']);
  }

 initalize()
 {
  this.dumy1 = this.dumy2;
 }


 /*  dismiss()
  {
    console.log(this.dumy1);
    this.madal.dismiss();
  }
 */
  ngOnInit() {
    if(this.bol)
    {
      this.initalize();
    }
   
  }

}
