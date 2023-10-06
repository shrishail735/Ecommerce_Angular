import { Component, Input } from '@angular/core';
import { navigation } from './nav-content';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.scss']
})
export class NavbarContentComponent {
  category:any;
  @Input() selectedSection:any;

   constructor(private router:Router)
   {

   }
  ngOnInit()
  {
    this.category=navigation;
    console.log(this.category)
  }

  navigateTo(path:string)
  {
    this.router.navigate([path]);
  }
}
