import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  appTitle: string = 'Local Storage Project'
  uploadImageTitle: string = 'Upload Image';
  viewImagesTitle: string = 'View Images';

  constructor() { }

  ngOnInit() {
  }

}
