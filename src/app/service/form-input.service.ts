import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const url = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class FormInputService {
  form1DataId: any;
  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get(url + "/api/v1/advertising-form");
  }

  turini_Tanlang(id: number) {
    return this.http.get(url + "/api/v1/contract-site?afId=" + id);
  }

  vositani_tanlang(id: number) {
    console.log(id)
    return this.http.get(url + "/api/v1/adv-put-form/all/"+ 1);
  }

  reklamaKiritish(
    contractId: string,
    day: string,
    descriptionUz: string,
    descriptionRu: string,
    price: string,
    name: string,
    type: string) {
    let rek = {
      'contractId': contractId, 'day': day, 'descriptionUz': descriptionUz,
      'descriptionRu': descriptionRu, 'price': price, 'name': name, 'type': type
    }
    const headers = { 'content-type': 'application/json'}
    console.log(rek)
    return this.http.post('localhost:8080/api/v1/adv-put-form', rek,{headers:headers});
  }

  // @ts-ignore
  form1Submit(data):Observable<any>{
    console.log('servicega form1 dan malumot keldi: ', data);
    console.log("this.form1DataId: ", this.form1DataId)
    return  this.http.post(url, data);
  }
  // @ts-ignore
  form2Submit(data):Observable<any>{
    this.form1DataId = data.contactId;
    return this.http.post(url,data);
  }


}
