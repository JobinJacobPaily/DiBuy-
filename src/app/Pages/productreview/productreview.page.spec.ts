import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductreviewPage } from './productreview.page';

describe('ProductreviewPage', () => {
  let component: ProductreviewPage;
  let fixture: ComponentFixture<ProductreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductreviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
