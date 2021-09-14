import { Injectable } from '@angular/core';
import { UserDetails } from '../models/UserDetails';
import { SuccessfulLoginServerResponse } from '../models/SuccessfulLoginServerResponse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserLoginDetails } from '../models/UserLoginDetails';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  isAdmin: string = '';
  firstName?: string
 

  constructor(private http: HttpClient) {}

  public auth(): Observable<any> {
    const token = localStorage.getItem('token');
    // console.log(token);
    return this.http.get<any>(`http://localhost:3001/users/${token}`);
  }

  public login(
    userLoginDetails: UserLoginDetails
  ): Observable<SuccessfulLoginServerResponse> {
    //  The http request will be sent after the subscribe() method will be called
    return this.http.post<SuccessfulLoginServerResponse>(
      'http://localhost:3001/users/login',
      userLoginDetails
    );
    // return this.http.post<SuccessfulLoginServerResponse>("/api/login", userLoginDetails);
  }
  public registerFirstStep(userRegisterDetails: UserDetails): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3001/users/registerfirststep',
      userRegisterDetails
    );
  }
  public registerSeconedStep(
    userRegisterDetails: UserDetails
  ): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3001/users/registerseconedstep',
      userRegisterDetails
    );
  }
}
