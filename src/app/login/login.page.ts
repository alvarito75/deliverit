import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Log in form
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  // Log in a user
  login() {
    console.log('creando user');
    console.log(this.form);

    // Login the user

    // Reset the form
    //this.form.reset();

    // Redirect to home
    //this.router.navigate(['/home']);
  }

}
