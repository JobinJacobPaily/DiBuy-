import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import { LoginPage } from '../login/login.page';
import { LoginPageModule } from '../login/login.module';
import { LoginPageRoutingModule } from '../login/login-routing.module';
//import { RegisterPageModule } from '../register/register.module';
//import { RegisterPage } from '../register/register.page';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
    
  ],
  declarations: [AboutPage],
  entryComponents:[],
  exports:[]
})
export class AboutPageModule {}
