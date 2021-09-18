import { CartsService } from './../../services/carts.service';
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
  public products: any[] = [];
  constructor(
    public stateService: StateService,
    public usersService: UsersService,
    public cartService: CartsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.cartService.productsList().subscribe((res) => {
      this.products = res;
    },  (serverErrorResponse) => {
      alert(serverErrorResponse.error.error);
    });
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userFirstName');
    localStorage.removeItem('userId');
    this.stateService.isLoggedIn = false;
    this.stateService.isCartContainer = false;
    this.usersService.isAdmin = "";
    this.router.navigate(['/home']);
  }
  toggleCartPage() {
    this.stateService.toggleIsCartContainer();
    this.stateService.isCartContainer
      ? this.router.navigate(['/customer'])
      : this.router.navigate(['/cartpage']);
  }
  backToProductsPage(){
    this.router.navigate(['/admin'])
 
  }
}
