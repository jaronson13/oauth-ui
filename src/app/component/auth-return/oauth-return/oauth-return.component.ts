import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/auth-service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-oauth-return',
  templateUrl: './oauth-return.component.html',
  styleUrls: ['./oauth-return.component.css']
})
export class OauthReturnComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.setAccessToken();
    this.router.navigate(['tenant']);
  }

}
