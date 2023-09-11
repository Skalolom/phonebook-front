import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

import {EntryModel} from "../../models/entry.model";

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit{
  phoneTypes = ["home", "work"];
  users!: EntryModel[];
  signupForm!: FormGroup;

  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.signupForm = new FormGroup<any>({
      'userId': new FormControl(null, Validators.required),
      'phone_number': new FormControl(null, Validators.required),
      'phone_type': new FormControl(null, Validators.required)
    });

    this.http.get<EntryModel[]>('http://localhost:8080/api/phonebook')
      .subscribe(responseData => {
        this.users = responseData;
      })
  }

  onSubmit(){
    if (!this.signupForm.value.userId){
      this.signupForm.value.userId = this.users[0].id;
    }
    this.http.post('http://localhost:8080/api/phonebook/create_phone', this.signupForm.value)
      .subscribe(responseData => {
        console.log(responseData);
      })
  }
}
