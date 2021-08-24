import {Component, OnInit} from '@angular/core';
import {FormInputService} from "../service/form-input.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-admin-adw',
  templateUrl: './admin-adw.component.html',
  styleUrls: ['./admin-adw.component.css']
})
export class AdminAdwComponent implements OnInit {


  contractId: any
  day: any
  descriptionUz: any
  descriptionRu: any
  price: any
  name: any
  type: any
  form_open: boolean = true;
  data_form1: any;
  info_text: any;

  constructor(public service: FormInputService) {
  }

  ngOnInit(): void {
  }

  save() {
    this.service.reklamaKiritish(this.contractId, this.day, this.descriptionUz, this.descriptionRu
      , this.price, this.name, this.type).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  onSubmitFirstForm(form1: NgForm) {
    this.service.form1Submit(form1.value);

    this.info_text = true;
    this.form_open = true;
    setTimeout(()=>{
      this.info_text =false;
    }, 800);
    /* console.log(this.data_form1)*/


  }

  onSubmitSecondaryForm(form2: NgForm) {
    this.service.form2Submit(form2.value);
    this.data_form1 = this.service.form1DataId;
    console.log(form2.value)
    form2.reset();
    this.form_open = false;
  }

}
