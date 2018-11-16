import { TestBed } from '@angular/core/testing';
import { ImageService } from './image.service';
describe('ImageService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ImageService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=image.service.spec.js.map