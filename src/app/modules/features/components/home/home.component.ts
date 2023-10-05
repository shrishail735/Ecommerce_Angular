import { Component } from '@angular/core';
import { gounsPage1 } from 'src/Data/Gouns/gouns';
import { menJeans } from 'src/Data/Men/men_jeans';
import { mens_kurta } from 'src/Data/Men/men_kurta';
import { lehngacholiPage2 } from 'src/Data/Saree/lenghaCholiPage2';
import { lengha_page1 } from 'src/Data/Women/LenghaCholi';
import { mensShoesPage1 } from 'src/Data/shoes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menJeans:any;
  womanGouns:any;
  lenghaCholi:any;
  mensKurta:any;
  mensshoes:any
  ngOnInit()
  {
    this.menJeans = menJeans.slice(0,5);
    this.womanGouns = gounsPage1.slice(0,5);
    this.lenghaCholi = lehngacholiPage2.slice(0,5);
    this.mensKurta = mens_kurta.slice(0,5);
    this.mensshoes = mensShoesPage1.slice(0,5);
  }
}
