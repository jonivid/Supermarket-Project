import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public isLoggedIn: boolean = false;

  constructor() {}
}