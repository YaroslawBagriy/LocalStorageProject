import { Component, OnInit } from '@angular/core';
import { ImageService } from './../image.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';

class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})

export class UploadimageComponent implements OnInit {

  form: FormGroup;
  imagePreview: string;
  chosenFileName: string;

  maxFileUploadSize = 1;
  totalLocalStorageUsed = 0;

  uploadImageButtonDisabled = true;

  imageService = new ImageService();

  ngOnInit() {
    this.form = new FormGroup({
      image: new FormControl(null, {validators: [Validators.required]})
    });
  }

  constructor() {

  }

  saveImage(name, image) {
    if (typeof(Storage) !== undefined) {
      this.imageService.saveImage(name, image);
    } else {
      alert('LocalStorage is not supported on your browser');
    }
  }

  isUploadImageDisabled() {
    return this.uploadImageButtonDisabled;
  }

  bytesToMegabytes(bytes: number) {
    return bytes / 1000000;
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.chosenFileName = file.name.substring(0, file.name.length - 4);

    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };

    reader.readAsDataURL(file);

    if (this.bytesToMegabytes(file.size) > this.maxFileUploadSize) {
      alert('File upload too large');
      this.uploadImageButtonDisabled = true;
    } else {
      this.uploadImageButtonDisabled = false;
    }
  }

  onUpload() {
    this.saveImage(this.chosenFileName, this.imagePreview);
  }

}
