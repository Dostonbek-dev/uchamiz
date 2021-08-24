import {Component, OnInit} from '@angular/core';
import {FizServiceService} from "../service/fiz-service.service";

@Component({
  selector: 'app-jis',
  templateUrl: './jis.component.html',
  styleUrls: ['./jis.component.css']
})
export class JisComponent implements OnInit {

  nomerKodi:any
  checkedDisableted = false;
  fio: any;
  passportSeria: any
  yashashManzil: any
  passpoortBerilgan: any
  telRaqam: any

  myDate = new Date();

  openMoDal = 'none';

  constructor(private service:FizServiceService) {
  }

  ngOnInit(): void {
  }

  showChack(event: any) {
    this.service.getCode().subscribe(
     data=>{
             this.nomerKodi=data;
     }
    );
    // @ts-ignore
    document.getElementById('btnDisable').disabled = event.target.value == '';
    this.openMoDal = 'block';
  }

  closeModal() {
    // @ts-ignore
    document.getElementById('flexCheckDefault').disabled = event.target.value == '';
    this.openMoDal = 'none'
    this.checkedDisableted = true
  }

  add() {
   this.service.add(this.fio,this.passportSeria,this.yashashManzil,this.passpoortBerilgan,this.telRaqam)
    this.fio = '';
    this.passportSeria = '';
    this.yashashManzil = '';
    this.passpoortBerilgan = '';
    this.telRaqam = '';
    console.log(this.add())
  }
}
