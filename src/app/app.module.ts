import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UploadimageComponent } from './uploadimage/uploadimage.component';
import { ViewimagesComponent } from './viewimages/viewimages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UploadimageComponent,
    ViewimagesComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
