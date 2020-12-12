import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {File} from '@ionic-native/file/ngx';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {LoginPageModule} from './Pages/login/login.module';
import {RegisterPageModule} from './Pages/register/register.module';
import {ViewItemPageModule} from './Pages/view-item/view-item.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    LoginPageModule,
    RegisterPageModule,
    ViewItemPageModule,
    
  ],
  providers: [
    
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy , useClass: IonicRouteStrategy
     },
     Camera,
     File,
     FileOpener
     
  ],
  bootstrap: [AppComponent],
  exports:[]

})
export class AppModule {}
