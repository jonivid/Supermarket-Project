import { StateService } from './../../services/state.service';
import { UserDetails } from './../../models/UserDetails';
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private userService: UsersService,private stateService: StateService) {}

  ngOnInit(): void {
    const userObservable = this.userService.auth();
    userObservable.subscribe(
      (UserDetails) => {
        this.stateService.isLoggedIn = true;
        if (UserDetails.isAdmin == 'ADMIN') {
          localStorage.setItem('userFirstName', 'admin');
          this.router.navigate(['/admin']);
        }
        else if (UserDetails.isAdmin == 'CUSTOMER') {
          console.log(UserDetails);
          localStorage.setItem(
            'userFirstName',
            UserDetails.firstName
          );
          localStorage.setItem(
            'userId',
            JSON.stringify(UserDetails.id)
          );
          this.router.navigate(['/customer']);
      }},
      (error) => {
        console.log(error);
      }
    );
  }
}
