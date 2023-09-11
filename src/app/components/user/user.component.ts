import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  signupForm!: FormGroup;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.signupForm = new FormGroup<any>({
      'name': new FormControl('default user', Validators.required),
      'title': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    this.http.post('http://localhost:8080/api/phonebook/create_user', this.signupForm.value)
      .subscribe(responseData => {
        console.log(responseData);
      })
  }

}
