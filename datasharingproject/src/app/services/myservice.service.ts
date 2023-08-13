import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  private name:string="this is my data";
  public getData(){
    return this.name;
  }
}
