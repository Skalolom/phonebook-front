import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {Routes, RouterModule } from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {PhonebookComponent} from "./components/phonebook/phonebook.component";
import { UserComponent } from './components/user/user.component';
import { PhoneComponent } from './components/phone/phone.component';
import { UpdateComponent } from './components/update/update.component';

const appRoutes: Routes = [
  { path: '', component: PhonebookComponent },
  { path: 'users', component: UserComponent },
  { path: 'phones', component: PhoneComponent },
  {path : 'update/:id', component: UpdateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PhonebookComponent,
    UserComponent,
    PhoneComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
