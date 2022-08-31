import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NotificationModule } from './services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MatDateFormats, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

//This is used for Date range (APP_DATE_FORMATS)
const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { day: 'numeric', month: 'numeric', year: 'numeric' },
  },
  display: {
    dateInput: { day: 'numeric', month: 'short', year: 'numeric' },
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    NotificationModule.forRoot() //this is used for date range
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, //this is used for date range component,
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS } //this is used for date range component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
