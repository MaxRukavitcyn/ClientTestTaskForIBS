import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  obj: object;

  constructor(private http: HttpClient) {
  }

  // getRequisitionList(): any {
  //   // let result: any = null;
  //   return this.http.get<Object>('http://localhost:8080/test/list').subscribe(
  //      (data) => {  }
  //   );
  //
  //   // return result;
  // }

  addRequisition(id, name, emailFrom, emailTo, status) {

    this.obj = {
      'id': id,
      'name': name,
      'emailFrom': emailFrom,
      'emailTo': emailTo,
      'status': (status === 'on') ? true : false
    };

    console.log(this.obj);
    this.http.post('http://localhost:8080/test/add', this.obj
    ).subscribe((res) => console.log(res));
  }
}
