import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { DataService } from '../services/data.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  // Registration form
  form = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  // Register a user
  register() {
    console.log('creando user');
    console.log(this.form);

    // Register the user
    this.dataService.registerUser();
    // Reset the form
    //this.form.reset();

    // Redirect to home
    //this.router.navigate(['/home']);
  }

}
