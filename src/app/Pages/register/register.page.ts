import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
 export class RegisterPage implements OnInit {
   flag;

  constructor(
    private modalctrl:ModalController,
    private router:Router
    ) { }
  dismiss(x)
  {
      if(x)
        //return this.modalctrl.dismiss();
        return this.router.navigate(['login']);
      //else if(this.flag)
      //return this.modalctrl.dismiss();
        
    this.router.navigate(['home']);
      }
  ngOnInit() {
  }

}
