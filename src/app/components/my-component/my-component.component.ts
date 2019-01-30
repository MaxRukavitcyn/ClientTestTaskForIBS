import {Component, OnInit} from '@angular/core';
import {MainServiceService} from '../../services/main-service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  keys: any;
  requisitions: any;

  constructor(public service: MainServiceService, public http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8080/test/list').subscribe(
      (res) => {this.requisitions = res;
        this.keys = Object.keys(this.requisitions); }
    );
  }

}
