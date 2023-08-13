import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent {

constructor(public service:MyserviceService){

}

gettingDatafromservice(){
  console.log(this.service.getData());
}

}
