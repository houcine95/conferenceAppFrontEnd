import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpFileComponent } from './up-file/up-file.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SendFileService} from '../app/send-file.service';

@NgModule({
  declarations: [
    AppComponent,
    UpFileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SendFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
