import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  check:boolean = true
  menu1:string = "fa fa-bars nav-menu"
  toggleMenu(){
    if(this.check==false){
      this.check =true
      this.menu1 = "fa fa-bars nav-menu"
    }
    else{
      this.check= false
      this.menu1 = "fa fa-times close"
    }
  //  this.menubar = "fa fa-times nav-menu"
    
  }
  // menubar = "fa fa-bars nav-menu" ;

}
