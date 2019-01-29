import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http: HttpClient) {
  }

  getRequisitionList(): void {
    this.http.get('http://localhost:8080/test/list').subscribe(
      (res) => console.log(res)
    );
  }

  addRequisition() {
    // const obj = {
    //   'id': 200,
    //   'name': 'easasdsad',
    //   'emailFrom': 'XXXX@mail.ruqweqweqwe',
    //   'emailTo': 'XXXX@mail.ru',
    //   'status': true
    // };
    // this.http.post('http://localhost:8080/test/add', obj, {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // }).pipe((error) => console.log(error));
  }
}
