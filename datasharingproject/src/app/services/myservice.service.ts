import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  // create private variable because i want to provide security and get the value using get method
  // this concept of encapsulation to provide the security
  private name:string="this is my data";
  public getData(){
    return this.name;
  }
}
