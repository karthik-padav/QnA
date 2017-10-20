import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    name:'',
    password:''
  }
  // submitted: boolean = false;
  // log(x){ console.log(x); }
  adminLogin(){console.log(this.user);}

  ngOnInit(){
    
  }
}
