import { UsersService } from './../../services/users.service';
import { StateService } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private stateService: StateService,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userFirstName');
    localStorage.removeItem('userId');
    this.stateService.isLoggedIn = false;
    this.userService.isAdmin = false;
    this.router.navigate(['/home']);
  }
}
