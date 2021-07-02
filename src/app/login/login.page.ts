import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Log in a user
  login() {
    console.log('creando user');
    console.log(this.form);

    // Login the user

    // Reset the form
    this.form.reset();

    // Redirect to home
    this.router.navigate(['/start']);
  }

}
