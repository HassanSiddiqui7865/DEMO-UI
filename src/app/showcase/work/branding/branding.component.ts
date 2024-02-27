import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss']
})
export class BrandingComponent implements OnInit {
  branding = [
    "https://businesslogodesign.us/assets/images/branding/01.webp",
    "https://businesslogodesign.us/assets/images/branding/02.webp",
    "https://businesslogodesign.us/assets/images/branding/03.webp",
    "https://businesslogodesign.us/assets/images/branding/04.webp",
    "https://businesslogodesign.us/assets/images/branding/05.webp",
    "https://businesslogodesign.us/assets/images/branding/06.webp",
    "https://businesslogodesign.us/assets/images/branding/07.webp",
    "https://businesslogodesign.us/assets/images/branding/08.webp",
    "https://businesslogodesign.us/assets/images/branding/09.webp",
  ]

  displayedArray: string[] = [];
  displayCount = 6;
  ngOnInit() {
    this.displayedArray = this.branding.slice(0,6)
  }

  loadMore() {
    const startIndex = this.displayedArray.length;
    const endIndex = Math.min(startIndex + this.displayCount, this.branding.length);
    this.displayedArray = this.displayedArray.concat(this.branding.slice(startIndex, endIndex));

  }
}
