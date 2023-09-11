import { Component, OnInit } from '@angular/core';
import {EntryModel} from "../../models/entry.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit{
  phonebookEntries: EntryModel[] = [];
  userId: number = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchPhoneBook();
  }

  private fetchPhoneBook() {
    this.http.get<EntryModel[]>('http://localhost:8080/api/phonebook')
      .subscribe( entries => {
        this.phonebookEntries = entries;
        //console.log(entries)
      })

    //console.log(this.phonebookEntries)
  }

  // here we define method for processing event - deletion of entry
  onDeleteEntry(event: Event) {
    let id = (<HTMLButtonElement>event.target).id
    this.http.delete(`http://localhost:8080/api/phonebook/${id}`)
      .subscribe(responseData => {
        console.log(responseData);
      })
    //console.log(id)
  }

  // here we define method to delete phone from the entry
  onDeleteContact(event: Event) {
    let id = (<HTMLButtonElement>event.target).id;
    this.http.delete(`http://localhost:8080/api/phonebook/contact/${id}`)
      .subscribe(responseData => {
        console.log(responseData);
      })
  }
}
