import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewimages',
  templateUrl: './viewimages.component.html',
  styleUrls: ['./viewimages.component.css']
})
export class ViewimagesComponent implements OnInit {

	imageStorageKeyList = []
	imageStorageData = new Map<string, any>();

	imageSrc: string;

	element: HTMLImageElement;

	loadImageStorageKeyList() {

		for(var key in localStorage)
		{
		    if (key != 'length' && key != 'key' && key != 'getItem' && key != 'setItem' && key != 'removeItem' && key != 'clear') {
		    	var dataImage = localStorage.getItem(key);
		    	this.imageStorageKeyList.push(key);
		    	this.imageStorageData[key] = dataImage;
		    	console.log(this.imageStorageData[key])


		    	this.element = document.createElement('img');
				var image = document.getElementById('image');
				// image.src = "data:image/png;base64," + dataImage;
		    }  
		}
	}

	deleteImage(key: string) {
		console.log("deleteImage");
		localStorage.removeItem(key);
	}

	constructor() { 
		console.log(localStorage.lastname)

		
	}

	ngOnInit() {
		this.loadImageStorageKeyList()
	}

}
