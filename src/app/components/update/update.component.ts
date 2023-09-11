import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  signupForm!: FormGroup;
  id: number = 0;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.signupForm = new FormGroup<any>({
      'name': new FormControl('default user', Validators.required),
      'title': new FormControl(null, Validators.required)
    });
    console.log(this.id);
  }

  onSubmit(){
    this.http.put(`http://localhost:8080/api/phonebook/${this.id}`, this.signupForm.value)
      .subscribe(responseData => {
        console.log(responseData);
      })
  }

}
