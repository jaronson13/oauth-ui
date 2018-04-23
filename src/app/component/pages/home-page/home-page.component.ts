import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  sendLogin(){
    const client_id = 'AuthorizationServer';
    const redirect_uri = 'http://localhost:4200/return';
    const response_type = 'token';
    const sendUrl = 'http://localhost:9000/oauth/authorize?';

    const requestURL = sendUrl +  'client_id=' + client_id + '&' +
                                'redirect_uri=' + redirect_uri + '&' +
                                'response_type=' + response_type;

    window.location.href = requestURL;
  }

  ngOnInit() {
  }

}
