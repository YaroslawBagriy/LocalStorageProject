import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadimageComponent } from './uploadimage/uploadimage.component';
import { ViewimagesComponent } from './viewimages/viewimages.component';

const routes: Routes = [
  { path: '', component: UploadimageComponent },
  { path: 'viewimages', component: ViewimagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
