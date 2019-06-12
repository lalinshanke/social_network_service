import { Component, OnInit } from '@angular/core';
import { PostServiceService } from './services/post-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  getData: any;

  constructor (private postServiceService: PostServiceService ) { }

  ngOnInit() {
    this.getData = this.postServiceService.userInfo;
  }
}
