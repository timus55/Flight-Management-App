import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StartComponent } from './components/start/start.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewFilghtsComponent } from './components/view-filghts/view-filghts.component';
import { BookComponent } from './components/book/book.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { CancelComponent } from './components/cancel/cancel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    StartComponent,
    ViewFilghtsComponent,
    BookComponent,
    TicketsComponent,
    CancelComponent,
    NavbarComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // modules for e.g:
    ReactiveFormsModule, // ReactiveFormsModule for Reactive forms,
    FormsModule, // FormsModule for Template driven forms
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
