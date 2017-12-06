import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { selector } from 'rxjs/operator/publish';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent implements OnInit {
  

  constructor( @Inject('API_URL') private API_URL,
    private http: HttpClient,
    private router: Router) { }

  signin(user) {
    this.http.post(this.API_URL + 'users/login', user)
      .subscribe(user => {
        console.log(user)
      })
  }

  ngOnInit(){
  }

}
