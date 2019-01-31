import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  keys: any;
  requisitions: any;
  obj: object;
  idReq: number;
  name: string;
  emailFrom: string;
  emailTo: string;
  status = false;
  isEdit = false;
  isAdd = false;

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    this.getRequisition();
  }
  getRequisition() {
    this.http.get('http://localhost:8080/test/list').subscribe(
      (res) => {this.requisitions = res;
        this.keys = Object.keys(this.requisitions); }
    );
  }
  addRequisition() {
    const obj = {
      'id': this.idReq,
      'name': this.name,
      'emailFrom': this.emailFrom,
      'emailTo': this.emailTo,
      'status': this.status
    };
    console.log(this.obj);
    this.http.post('http://localhost:8080/test/add', obj
    ).subscribe((res) => {
      console.log(res);
      this.getRequisition();
    });
  }
  showEdit() {
    this.isEdit = !this.isEdit;
    this.isAdd = false;
  }
  showAdd() {
    this.isAdd = !this.isAdd;
    this.isEdit = false;
  }
  patchRequisition() {
    const obj = {
      'id': this.idReq,
      'name': this.name,
      'emailFrom': this.emailFrom,
      'emailTo': this.emailTo,
      'status': this.status
    };
    console.log(this.obj);
    this.http.put('http://localhost:8080/test/patch', obj
    ).subscribe((res) => {
      console.log(res);
      this.getRequisition();

    });
  }
  deleteReq(id) {
    this.http.delete('http://localhost:8080/test/' + id
    ).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });

  }

}
