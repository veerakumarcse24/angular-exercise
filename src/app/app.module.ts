import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
