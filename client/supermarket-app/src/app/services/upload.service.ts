import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  

  SERVER_URL: string = "http://localhost:8080/Coupons/picture";
  
  constructor(private httpClient: HttpClient) { }

  public upload(formData:any) {
    console.log(formData);
    return this.httpClient.post<any>(this.SERVER_URL, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
