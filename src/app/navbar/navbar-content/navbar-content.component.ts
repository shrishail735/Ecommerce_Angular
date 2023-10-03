import { Component, Input } from '@angular/core';
import { navigation } from './nav-content';

@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.scss']
})
export class NavbarContentComponent {
  category:any;
  @Input() selectedSection:any;

  ngOnInit()
  {
    this.category=navigation;
    console.log(this.category)
  }
}
