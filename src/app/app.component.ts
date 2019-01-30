import {Component} from '@angular/core';
import {MainServiceService} from './services/main-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private service: MainServiceService;

  constructor(service: MainServiceService) {
    this.service = service;
    // this.service.getRequisitionList();
  }

}
