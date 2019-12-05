import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule, // need if any ionic components will be used in the module (shared in this case)
  ],
  declarations: [
    ProfileComponent,
    LoginComponent,

  ],
  exports: [
    ProfileComponent,
    LoginComponent,

  ]
})
export class SharedModule { }
