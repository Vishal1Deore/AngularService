import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';



@NgModule({
  declarations: [
    LoginuserComponent,
    RegisteruserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginuserComponent,
    RegisteruserComponent
  ]
})
export class LoginModule { }
