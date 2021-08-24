import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../../service/register.service";

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  // @ts-ignore
  fullName: string
  // @ts-ignore
  userName: string ;
  // @ts-ignore
  password: string ;
  // @ts-ignore
  role: string ;

  constructor(public register:RegisterService) { }

  ngOnInit(): void {
  }

  registerUser() {

   this.register.sendRegister(this.userName,this.password).subscribe(
     data=>{
       console.log(data);
     }
   )
   ;
  }
}
