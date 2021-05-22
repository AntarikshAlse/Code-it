import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalServiceService } from 'src/crud/shared/global-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private _globalSer:GlobalServiceService,private _router:Router) { }

  ngOnInit(): void {
  }
  user:string='';
   password:string='';
   userData:any;

  loginUser(){
    this._globalSer.getData('login').subscribe((res)=>{
      this.userData=res;
  // console.log(this.userData)

     const data=this.userData.filter((item:any)=>{ return item.user==this.user && item.password==this.password })
    if(data.length > 0){
       this._globalSer.SignIn(this.user);
       this._router.navigate(['dashboard']);
    }else{
      alert('Invalid credential try agin.');
      this.user="";
      this.password="";
    }
    
    })
  } 

}
