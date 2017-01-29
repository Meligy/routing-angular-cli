import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-simple-route',
  templateUrl: './simple-route.component.html',
  styleUrls: ['./simple-route.component.scss']
})
export class SimpleRouteComponent implements OnInit {

  formGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  loggedInName = <string> null;

  constructor(http: Http) {
    http.get('/favicon.ico').subscribe(console.log);
  }

  ngOnInit() {
  }

  onLogin(formValue) {
    this.loggedInName = formValue.password ? formValue.username : null;
  }

}
