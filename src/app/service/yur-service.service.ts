import {Injectable} from '@angular/core';
import {Yur} from "../model/yur";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class YurServiceService {

  yurDomain: Yur = new Yur();

  constructor(public http: HttpClient) {
  }


  add(
    firmaNomi: any,
      manzili: any,
      bankMalumotlari: any,
      BMM_mfo: any,
      hr: any,
      derektorFio: any,
    sitr:any) {

    this.yurDomain.firmaNomi = firmaNomi;
    this.yurDomain.manzili = manzili;
    this.yurDomain.bankMalumotlari = bankMalumotlari
    this.yurDomain.BMM_mfo = BMM_mfo
    this.yurDomain.hr = hr;
    this.yurDomain.derektorFio = derektorFio;
    return this.http.post("url", this.yurDomain);
  }

  getCode() {
    return this.http.get("url");
  }
}
