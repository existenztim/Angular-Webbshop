import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor() {}
  handleBrokenImgLink(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = '../../../assets/broken-image-link-cover.webp';
  }
}
