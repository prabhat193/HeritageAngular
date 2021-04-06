import { Component, OnInit } from '@angular/core';
import { Type } from '../models/type';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Type = Type;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login(Type: Type) {
    this.authService.login(Type);
    this.router.navigate(['/']);
  }  

  logout() {
    this.authService.logout();
  }
}
