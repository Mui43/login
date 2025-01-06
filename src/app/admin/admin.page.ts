import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(
    public dataapi: DataapiService,
    public route: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.dataapi.logoutUser().subscribe({
      next: () => {
        localStorage.removeItem('token');
        this.route.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error logout:', error);
        alert('Error:${error.message}');
      }
    });
  }

}
