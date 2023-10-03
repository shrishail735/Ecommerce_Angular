import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  currentSection:any;
  isNavOpen:any;
  openNavContent(option:string,id:any,event:any)
  {
    if(id==1)
    {
      this.currentSection=option;
      this.isNavOpen=true;
      event.stopPropagation();
    }
    else{
      this.isNavOpen=false;
    }
  }

  navigateTo(path:any)
  {

  }

  @HostListener('document:click',['$event'])
  onDocumentClick(event:MouseEvent)
  {
    this.openNavContent("",2,event);
    event.stopPropagation()  
  }

}
