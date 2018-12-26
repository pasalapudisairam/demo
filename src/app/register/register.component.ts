import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
reqobj:any={};
errormsg:string;
  constructor(public router:Router) { }
  ngOnInit() {
  }

  redirectloginpage(){
    if(this.reqobj.FirstNmae!=undefined&& this.reqobj.Email!=undefined && this.reqobj.LastName!=undefined && this.reqobj.Password!=undefined && this.reqobj.ConfirmPassword!=undefined){

    
    localStorage.setItem('useremail',this.reqobj.Email)
    localStorage.setItem('userpassword',this.reqobj.Password)
    
    this.router.navigate(['/LoginPage'])
    this.reqobj={};

  }
else{
this.errormsg="Please Fill Mandatory Fileds"
}
  }

}
