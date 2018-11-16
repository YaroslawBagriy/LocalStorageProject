var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
    return ImageSnippet;
}());
var UploadimageComponent = /** @class */ (function () {
    function UploadimageComponent() {
        this.chosenFile = null;
    }
    UploadimageComponent.prototype.onFileSelected = function (event) {
        console.log("onFileSelected");
        console.log(event);
        this.chosenFile = event.target.files[0];
        console.log(event.target.name);
        console.log("event.target.name");
        localStorage.setItem('file', this.chosenFile);
        localStorage.setItem("lastname", "Smith1");
    };
    UploadimageComponent.prototype.onUpload = function () {
        console.log("onUpload");
    };
    UploadimageComponent.prototype.ngOnInit = function () {
    };
    UploadimageComponent = __decorate([
        Component({
            selector: 'app-uploadimage',
            templateUrl: './uploadimage.component.html',
            styleUrls: ['./uploadimage.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], UploadimageComponent);
    return UploadimageComponent;
}());
export { UploadimageComponent };
//# sourceMappingURL=uploadimage.component.js.map