import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logodesigns',
  templateUrl: './logodesigns.component.html',
  styleUrls: ['./logodesigns.component.scss']
})
export class LogodesignsComponent implements OnInit {
  logoArray = [
    "https://businesslogodesign.us/assets/images/01.gif",
    "https://businesslogodesign.us/assets/images/02.gif",
    "https://businesslogodesign.us/assets/images/03.gif",
    "https://businesslogodesign.us/assets/images/06.gif",
    "https://businesslogodesign.us/assets/images/09.gif",
    "https://businesslogodesign.us/assets/images/12.gif",
    "https://businesslogodesign.us/assets/images/13.gif",
    "https://businesslogodesign.us/assets/images/17.gif",
    "https://businesslogodesign.us/assets/images/18.gif",
    "https://businesslogodesign.us/assets/images/logo/01.webp",
    "https://businesslogodesign.us/assets/images/logo/02.webp",
    "https://businesslogodesign.us/assets/images/logo/03.webp",
    "https://businesslogodesign.us/assets/images/logo/04.webp",
    "https://businesslogodesign.us/assets/images/logo/05.webp",
    "https://businesslogodesign.us/assets/images/logo/06.webp",
    "https://businesslogodesign.us/assets/images/logo/07.webp",
    "https://businesslogodesign.us/assets/images/logo/08.webp",
    "https://businesslogodesign.us/assets/images/logo/09.webp",
    "https://businesslogodesign.us/assets/images/logo/10.webp",
    "https://businesslogodesign.us/assets/images/logo/11.webp",
    "https://businesslogodesign.us/assets/images/logo/12.webp",
    "https://businesslogodesign.us/assets/images/logo/13.webp",
    "https://businesslogodesign.us/assets/images/logo/14.webp",
    "https://businesslogodesign.us/assets/images/logo/15.webp",
    "https://businesslogodesign.us/assets/images/logo/16.webp",
    "https://businesslogodesign.us/assets/images/logo/17.webp",
    "https://businesslogodesign.us/assets/images/logo/18.webp",
    "https://businesslogodesign.us/assets/images/logo/19.webp",
    "https://businesslogodesign.us/assets/images/logo/20.webp",
    "https://businesslogodesign.us/assets/images/logo/21.webp",
    "https://businesslogodesign.us/assets/images/logo/22.webp",
    "https://businesslogodesign.us/assets/images/logo/23.webp",
    "https://businesslogodesign.us/assets/images/logo/24.webp",
    "https://businesslogodesign.us/assets/images/logo/25.webp",
    "https://businesslogodesign.us/assets/images/logo/26.webp",
  ]
  displayedArray: string[] = [];
  displayCount = 6;
  ngOnInit() {
    this.displayedArray = this.logoArray.slice(0,6)
  }

  loadMore() {
    const startIndex = this.displayedArray.length;
    const endIndex = Math.min(startIndex + this.displayCount, this.logoArray.length);
    this.displayedArray = this.displayedArray.concat(this.logoArray.slice(startIndex, endIndex));

  }
}
