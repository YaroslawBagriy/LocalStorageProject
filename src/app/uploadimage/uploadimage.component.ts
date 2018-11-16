import { Component, OnInit } from '@angular/core';
import { ImageService } from './../image.service';
import { LocalStorage } from '@ngx-pwa/local-storage';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadimageComponent implements OnInit {

	chosenFile = null;
	chosenFileName: string = '';

	maxFileUploadSize = 1;
	totalLocalStorageUsed = 0;

	uploadImageButtonDisabled = true;

	imageSrc: string;

	saveImage(name, image) {
		if (typeof(Storage) !== undefined) {
        	localStorage.setItem(name, image);
	    }
	    else {
	        alert("LocalStorage is not supported on your browser");
	    }
	}

	isUploadImageDisabled() {
		return this.uploadImageButtonDisabled;
	}

	bytesToMegabytes(bytes: number) {
		return bytes/1000000
	}

	byteLength(str) {
		// returns the byte length of an utf8 string
		var s = str.length;
		for (var i=str.length-1; i>=0; i--) {
		var code = str.charCodeAt(i);
		if (code > 0x7f && code <= 0x7ff) s++;
		else if (code > 0x7ff && code <= 0xffff) s+=2;
		if (code >= 0xDC00 && code <= 0xDFFF) i--; //trail surrogate
		}
		return s;
	}

	// calculateCurrentSizeOfLocalStorage() {
	// 	for(var key in localStorage)
	// 	{	
	// 		console.log(this.byteLength(localStorage.getItem(key)));
	// 	}
	// }

	getBase64Image(img) {
	    var canvas = document.createElement("canvas");
	    canvas.width = img.width;
	    canvas.height = img.height;

	    var ctx = canvas.getContext("2d");
	    ctx.drawImage(img, 0, 0);

	    var dataURL = canvas.toDataURL("image/png");

	    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
	}

	onFileSelected(event: any) {
		console.log("onFileSelected")
		console.log(event)

		if (event.target.files && event.target.files[0]) {
	        const file = event.target.files[0];

	        const reader = new FileReader();
	     	
	        reader.onload = e => this.imageSrc = reader.result;

	        reader.readAsDataURL(file);
	    }

	    var image = document.getElementById('image');
		// this.chosenFile = this.getBase64Image(image);
		this.chosenFile = image;
		this.chosenFileName = event.target.files[0].name.substring(0, event.target.files[0].name.length - 4);

		console.log(event.target.files[0].size)
		if (this.bytesToMegabytes(event.target.files[0].size) > this.maxFileUploadSize) {
			alert("File upload too large");
			this.uploadImageButtonDisabled = true;
		} else {
			this.uploadImageButtonDisabled = false;
		}
	}

	onUpload() {
		console.log("onUpload")
		this.saveImage(this.chosenFileName, this.chosenFile)
	}

	constructor(){
		console.log(localStorage.remainingSpace);
		console.log(localStorage.length);
	}

	ngOnInit() {

	}

}