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
  productsCount: number = 0;

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
    public productsService: ProductsService
  ) {}

  ngOnInit(): void {
    let observableProducts = this.productsService.getAllProducts();
    observableProducts.subscribe(
      (productsList) => {
        // console.log(productsList);
        this.productsCount = productsList.length;
      },
      (error) => {
        console.log(error);
      })
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

  handleFormState() {
    this.stepOneLogin = false;
    this.stepOneRegister = false;
    this.stepTwo = true;
  }

  register(): void {
    let registerObservable = this.usersService.register(
      this.userRegisterDetails
    );
    registerObservable.subscribe(
      (successfulServerRequestData) => {
        // console.log(successfulServerRequestData);
        this.router.navigate(['/customer']);
      },
      (serverErrorResponse) => {
        alert(
          'Error! Status: ' +
            serverErrorResponse.status +
            ', Message: ' +
            serverErrorResponse.message
        );
      }
    );
  }

  login(): void {
    let loginObservable = this.usersService.login(this.userLoginDetails);
    loginObservable.subscribe(
      (successfulServerRequestData) => {
        this.stateService.isLoggedIn = true;
        this.usersService.isAdmin = successfulServerRequestData.isAdmin;
        localStorage.setItem(
          'token',
          'Bearer ' + successfulServerRequestData.token + ''
        );

        if (successfulServerRequestData.isAdmin == 'ADMIN') {
          localStorage.setItem('userFirstName', 'admin');
          this.router.navigate(['/admin']);
        } 
        else if (successfulServerRequestData.isAdmin == 'CUSTOMER') {
          this.stateService.toggleIsCartContainer();
          localStorage.setItem(
            'userFirstName',
            successfulServerRequestData.userDetails.firstName
          );
          localStorage.setItem(
            'userId',
            JSON.stringify(successfulServerRequestData.userDetails.id)
          );

          let cartObservable = this.cartService.getCart(
            localStorage.getItem('userId')
          );
          cartObservable.subscribe(
            (cart) => {
              if (cart) {
                if (cart.status === 'open') {
                  this.cartService.currentCart = cart;
                  this.cartService.getProductsList().subscribe((res) => {
                    this.cartService.cartItemList = res;
                    this.cartService.productList.next(res);
                  });
                }
              } else {
                let newCartObservable = this.cartService.createNewCart(
                  localStorage.getItem('userId')
                );
                newCartObservable.subscribe(
                  (cart) => {
                    this.cartService.currentCart = cart;
                    console.log(
                      'we created a new cart cart',
                      this.cartService.currentCart
                    );
                  },
                  (error) => {}
                );
              }
            },
            (error) => {}
          );
          this.router.navigate(['/customer']);
        }
      },
      (serverErrorResponse) => {
        // Reaching here means that the server had failed
        // serverErrorResponse is the object returned from the ExceptionsHandler
        alert(
          'Error! Status: ' +
            serverErrorResponse.status +
            ', Message: ' +
            serverErrorResponse.message
        );
      }
    );
  }
}
