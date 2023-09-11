import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators'

import {EntryModel} from "./models/entry.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }
}
