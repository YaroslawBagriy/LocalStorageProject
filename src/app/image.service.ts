import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  constructor() {

  }

  saveImage(name, image) {
    localStorage.setItem(name, image);
  }

  deleteImage(key: string) {
    localStorage.removeItem(key);
  }
}
