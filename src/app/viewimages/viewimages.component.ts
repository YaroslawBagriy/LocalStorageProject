import { Component, OnInit } from '@angular/core';
import { ImageService } from './../image.service';

@Component({
  selector: 'app-viewimages',
  templateUrl: './viewimages.component.html',
  styleUrls: ['./viewimages.component.css']
})

export class ViewimagesComponent implements OnInit {

  imageStorageKeyList = [];
  lStorage = localStorage;

  imageService = new ImageService();

  ngOnInit() {
    this.loadImageStorageKeyList();
  }

  constructor() {

  }

  loadImageStorageKeyList() {
    for (const key in localStorage) {
      if (key !== 'length' && key !== 'key' && key !== 'getItem' && key !== 'setItem' && key !== 'removeItem' && key !== 'clear') {
        this.imageStorageKeyList.push(key);
      }
    }
  }

  deleteImage(key: string) {
    this.imageService.deleteImage(key);
  }

}
