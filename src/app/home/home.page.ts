import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  txtusername:any;
  txtpassword:any;

  constructor(public route: Router, public dataapi: DataapiService) {

  }

  login() {
    let datalog = {
      username: this.txtusername,
      password: this.txtpassword
    }
    this.dataapi.loginUser(datalog).subscribe({
      next: (res:any) => {
      if (res.success) {
        localStorage.setItem('token',res.token);
        this.route.navigateByUrl('/admin');
      }else{
        alert('Error: Invalid credentials' + res.message);
      }
     },
     error: (error) => {
      console.log(error);
      alert('Error: ' +error.message);
     }
    });
  }

  gotoregister() {
    this.route.navigate(['/register']);
  }
}
