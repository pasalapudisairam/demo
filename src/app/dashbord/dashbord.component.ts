import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  userdetails:any={};
  userdataarraya:any=[];
  indexValue:any;
  constructor() { }

  ngOnInit() {
  }
  userdeta(key,data,index){
    if(key==='Add' && this.indexValue){
      this.userdataarraya.splice(this.indexValue,1,this.userdetails)
      this.userdetails={};
      this.indexValue = undefined;
      console.log('Add',data)
    }
    else if(key==='Add' && this.indexValue == undefined){
      this.userdataarraya.push(this.userdetails)
      this.userdetails={};
      console.log('Add',data)
    }
  else if(key==='Edit'){
    console.log('Edit',data);
    this.userdetails = data;
    this.indexValue = index;
  } 
  else if(key==='Delete'){
// delete this.userdataarraya[index] ;
this.userdataarraya.splice(this.indexValue,1)

      }
  }

  clear(){
    this.userdetails={}
  }

}
