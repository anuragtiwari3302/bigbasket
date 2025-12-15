import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginObj: any = {
    userName: '',
    password: ''
  };

  constructor(private router: Router) { }

  onLogin() {
    if (this.loginObj.userName == "admin" && this.loginObj.password == "123456") {
      this.router.navigateByUrl(['/products'].toString());
      console.log('Logging in with', this.loginObj);
    }
    else {
      alert('Please enter correct username and password.');
      console.log('Incorrect login attempt', this.loginObj);
    }
  }

}
