import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public isLoggedIn: boolean = false;
  public isCartContainer: boolean = false;
  public isEditProduct: boolean = false;
  constructor() {}

  toggleIsCartContainer(): any {
    this.isCartContainer = !this.isCartContainer;
  }
}
