import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Fiz} from "../model/fiz";


@Injectable({
  providedIn: 'root'
})
export class FizServiceService {
  jisDoman: Fiz=new Fiz();

  constructor(public http: HttpClient) {
  }

  add(fio: any,
      passportSeria: any,
      yashashManzil: any,
      passpoortBerilgan: any,
      telRaqam: any) {
    this.jisDoman.fio = fio
    this.jisDoman.passportRaqamSeria = passportSeria
    this.jisDoman.kimTomondanBerilgan = passpoortBerilgan
    this.jisDoman.telRaqam = telRaqam
    return this.http.post("localHost:dksmk", this.jisDoman);
  }

  getCode() {
    return this.http.get("getCode");
  }
}
