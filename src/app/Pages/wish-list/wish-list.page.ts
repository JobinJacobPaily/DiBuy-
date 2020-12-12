import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.page.html',
  styleUrls: ['./wish-list.page.scss'],
})
export class WishListPage implements OnInit {

  constructor(private modal:ModalController) { }

  dismiss()
  {
    this.modal.dismiss();
  }

  ngOnInit() {
  }

}
