import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
//import { RegisterPage } from '../register/register.page';
import { LoginPage } from '../login/login.page';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private modalctrl:ModalController) { }

  
  
  ngOnInit() {
  }

}
