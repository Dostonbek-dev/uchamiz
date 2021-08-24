import {Component, OnInit} from '@angular/core';
import {SosialData} from "../model/sosial-data";
import {runCommand} from "@angular/cli/models/command-runner";
import {FormInputService} from "../service/form-input.service";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  turlar_kelishi:any
  vosita_kelishi:any

  hamasi_kelishi:any;

  id:any;
  contractId: any
  days:any
  descreption:any
  price:any

  totalPrice:any='3000$';

  turini_Tanlang:any
  vositani_tanlang:any
  saytni_tablang:any
  gazetani_tanlang:any
  tashqi_manbani_tanlang:any
  tashkilotni_tanlang:any
  count: number=0;
  btn_disable = true;
  constructor(private service:FormInputService) {
  }


  ngOnInit(): void {
 this.service.getData().subscribe(
   data=>{
   this.turlar_kelishi=data
     console.log(data)
   },
 );

  }
  turiniTanlang() {
    console.log(this.turini_Tanlang)
      this.service.turini_Tanlang(this.turini_Tanlang).subscribe(
        data=>{
          this.vosita_kelishi=data;
          console.log(data)
        }
      );
      // @ts-ignore
      document.getElementById('vositani_tanlang').disabled = event.target.value == '';
  }
  vositaniTanlang(){
    this.service.vositani_tanlang(this.vositani_tanlang).subscribe(
      data=>{
        this.hamasi_kelishi=data;
        console.log(data)
      }
    );
  }

  onPlusBtn() {
    this.count +=1;
    this.btn_disable = false;
  }

  onMinusBtn() {
   this.count -=1;
   this.btn_disable = true;
  }
}
