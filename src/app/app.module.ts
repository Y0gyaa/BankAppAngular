import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CitylistComponent } from './citylist/citylist.component';
import { DataService } from './data.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import{ MatInputModule} from '@angular/material/input';
import{MatAutocompleteModule} from '@angular/material/autocomplete';
import{MatChipsModule} from '@angular/material/chips';
   
  

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    CitylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule, MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
