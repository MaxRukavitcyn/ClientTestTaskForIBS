import {Component} from '@angular/core';
import {MainServiceService} from './services/main-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service1: MainServiceService) {
    service1.getRequisitionList();
  }
}
