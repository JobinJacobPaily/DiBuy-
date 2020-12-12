import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 flag;
  
 
  constructor(private modalctrl:ModalController,private router:Router) { 
  }
  
  dismiss(x)
  {
      if(x)
        //return this.modalctrl.dismiss();
        return this.router.navigate(['register']);
      else if(this.flag)
      return this.modalctrl.dismiss();
        
    this.router.navigate(['home']);

  }


  ngOnInit() {
  }

}
