import { OrdersService } from './../../services/orders.service';
import { ProductsService } from './../../services/products.service';
import { UserDetails } from '../../models/UserDetails';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginDetails } from 'src/app/models/UserLoginDetails';
import { UsersService } from 'src/app/services/users.service';
import { StateService } from 'src/app/services/state.service';
import { CartsService } from 'src/app/services/carts.service';

@Component({
  selector: 'app-login-and-register',
  templateUrl: './login-and-register.component.html',
  styleUrls: ['./login-and-register.component.css'],
})
export class LoginAndRegisterComponent implements OnInit {
  userLoginDetails: UserLoginDetails = new UserLoginDetails('', '');
  userRegisterDetails: UserDetails = new UserDetails();
  public productsCount: number = 0;
  public ordersCount: number = 0;

  public cities: string[] = [
    'Ashdod',
    'Ashkelon',
    'Holon',
    'Tel Aviv',
    'Haifa',
    'Jerusalem',
    'Bat Yam',
    'Rishon Lezion',
    'Beer Sheva',
    'Natanya',
  ];
  public isHandleSignUp: boolean = true;
  public isHandleSignIn: boolean = false;
  public stepOneLogin: boolean = true;
  public stepOneRegister: boolean = false;
  public stepTwo: boolean = false;
  public city: string = '';

  constructor(
    private usersService: UsersService,
    private router: Router,
    private stateService: StateService,
    public cartService: CartsService,
    public productsService: ProductsService,
    public ordersService: OrdersService
  ) {}

  ngOnInit(): void {
    let observableOrderCount = this.ordersService.getOrdersCount();
    observableOrderCount.subscribe(
      (countResult) => {
      this.ordersCount = countResult[0].ordersNumber;
    },(serverErrorResponse) => {
      alert(serverErrorResponse.error.error)
    })

    let observableProducts = this.productsService.getProductsQuantity();
    observableProducts.subscribe(
      (productsList) => {
        this.productsCount = productsList.length;
      },
      (serverErrorResponse) => {
        alert(serverErrorResponse.error.error)
      }
    );
  }

  onChange(newValue: string) {
    this.userRegisterDetails.city = newValue;
  }

  handleSignIn() {
    this.isHandleSignIn = false;
    this.isHandleSignUp = true;
    this.stepOneRegister = false;
    this.stepOneLogin = true;
    this.stepTwo = false;
  }
  handleSignUp() {
    this.isHandleSignIn = true;
    this.isHandleSignUp = false;
    this.stepOneRegister = true;
    this.stepOneLogin = false;
    this.stepTwo = false;
  }

  registerFirstStep() {
   
    let registerObservable = this.usersService.registerFirstStep(
      this.userRegisterDetails
    );
    registerObservable.subscribe(
      (successfulServerRequestData) => {
        this.stepOneLogin = false;
        this.stepOneRegister = false;
        this.stepTwo = true;
      },
      (serverErrorResponse) => {
        alert(serverErrorResponse.error.error)
        }
    );
  }

  registerSeconedStep(): void {
    let registerObservable = this.usersService.registerSeconedStep(
      this.userRegisterDetails
    );
    registerObservable.subscribe(
      (successfulServerRequestData) => {
        // console.log(successfulServerRequestData);
        this.handleSignIn() 
        this.userLoginDetails.email=this.userRegisterDetails.email 
        this.userLoginDetails.password=this.userRegisterDetails.password
      this.userRegisterDetails=new UserDetails()
        this.login()
    
    },
      (serverErrorResponse) => {
        alert(serverErrorResponse.error.error)

      }
    );
  }

  login(): void {
    let loginObservable = this.usersService.login(this.userLoginDetails);
    loginObservable.subscribe(
      (successfulServerRequestData) => {
        this.usersService.firstName=successfulServerRequestData.userDetails.firstName
        this.stateService.isLoggedIn = true;
        this.usersService.isAdmin = successfulServerRequestData.isAdmin;
        localStorage.setItem(
          'token',
          'Bearer ' + successfulServerRequestData.token + ''
        );

        if (successfulServerRequestData.isAdmin == 'ADMIN') {
          localStorage.setItem('userFirstName', 'admin');
          this.router.navigate(['/admin']);
        } else if (successfulServerRequestData.isAdmin == 'CUSTOMER') {
          this.ordersService.userCity =
            successfulServerRequestData.userDetails.city;
          this.ordersService.userStreet =
            successfulServerRequestData.userDetails.street;
          localStorage.setItem(
            'userFirstName',
            successfulServerRequestData.userDetails.firstName
          );
          localStorage.setItem(
            'userId',
            JSON.stringify(successfulServerRequestData.userDetails.id)
          );
          this.router.navigate(['/customer']);
        }
      },
      (serverErrorResponse) => {
        alert(serverErrorResponse.error.error);
      }
    );
  }
}
