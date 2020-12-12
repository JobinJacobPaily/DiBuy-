import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appMenu = [

    {title: 'AboutUs',url:'/about',icon:'add'},
    {title: 'ContactUs',url:'/contact',icon:'person-circle-outline'},
    {title:'Register',url:'/register',icon:'home-outline'},
    {title:'Login',url:'/login',icon:'home-outline'},
    {title:'WishList', url:'/wish-list'},
    {title:'Invoice',url:'/invoice'}
  ];
  constructor(
    private router:Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }
 
  home()
  {
    this.router.navigate(['home']);
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
