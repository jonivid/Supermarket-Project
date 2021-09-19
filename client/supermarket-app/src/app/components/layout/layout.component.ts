import { OrdersService } from './../../services/orders.service';
import { StateService } from 'src/app/services/state.service';
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  constructor(
    public usersService: UsersService,
    public stateService: StateService,
    public ordersService: OrdersService,
  ) {}

  ngOnInit(): void {
    let observable = this.usersService.auth();
    observable.subscribe(
      (res) => {
        this.usersService.firstName = res.firstName;
        this.stateService.isLoggedIn = true;
        this.usersService.isAdmin = res.isAdmin;
        this.ordersService.userCity= res.city
        this.ordersService.userStreet= res.street
      },
      (serverErrorResponse) => {
      }
    );
  }
}
