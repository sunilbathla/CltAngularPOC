import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientAngularApp';
  constructor(private router:Router){}
  home(path: string){
    this.router.navigate([path]);
  }

  logout(){

  }

  loginScreen(){
    
  }
}
