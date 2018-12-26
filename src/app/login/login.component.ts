import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
recevingobj:any={};
email:String;
password:String;
singupobj:any={};
errormsg:string;
  constructor(public router:Router) {
   this.email= localStorage.getItem('useremail')
    this.password=localStorage.getItem('userpassword')
    console.log(  this.email,this.password)
  }

  ngOnInit() {
  }
  redirectingregisterpage(){
    this.router.navigate(['/Registerpage'])
  }
  login(){
    if( this.singupobj.Email!=undefined && this.singupobj.Password!=undefined){

    
    if(this.singupobj.Email == this.email && this.singupobj.Password== this.password){
this.router.navigate(['/dashbord'])
      this.singupobj={};
    }
    else{
     this.errormsg="Invalid User Please Register";
    }
  }else{
    this.errormsg="Please Fill Mandatory Fileds"
  }
  }
}
