import { Inject } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public isLoggedIn: boolean = false;
  public isCartContainer: boolean = false;
  constructor() {}

  toggleIsCartContainer(): any {
    this.isCartContainer = !this.isCartContainer;
  }
}
