import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact/contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageContactComponent,
    ContactFormComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
