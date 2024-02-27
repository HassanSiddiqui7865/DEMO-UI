import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobileapps',
  templateUrl: './mobileapps.component.html',
  styleUrls: ['./mobileapps.component.scss']
})
export class MobileappsComponent implements OnInit {
  appsArray = [
    "https://businesslogodesign.us/assets/images/apps/01.webp",
    "https://businesslogodesign.us/assets/images/apps/02.webp",
    "https://businesslogodesign.us/assets/images/apps/03.webp",
    "https://businesslogodesign.us/assets/images/apps/04.webp",
    "https://businesslogodesign.us/assets/images/apps/05.webp",
    "https://businesslogodesign.us/assets/images/apps/06.webp",
    "https://businesslogodesign.us/assets/images/apps/07.webp",
    "https://businesslogodesign.us/assets/images/apps/08.webp",
    "https://businesslogodesign.us/assets/images/apps/09.webp",
    "https://businesslogodesign.us/assets/images/apps/10.webp",
    "https://businesslogodesign.us/assets/images/apps/11.webp",
    "https://businesslogodesign.us/assets/images/apps/12.webp",
    "https://businesslogodesign.us/assets/images/apps/13.webp",
    "https://businesslogodesign.us/assets/images/apps/14.webp",
    "https://businesslogodesign.us/assets/images/apps/15.webp",
    "https://businesslogodesign.us/assets/images/apps/16.webp",
    "https://businesslogodesign.us/assets/images/apps/17.webp",
  ];

  displayedArray: string[] = [];
  displayCount = 6;
  ngOnInit() {
    this.displayedArray = this.appsArray.slice(0,6)
  }

  loadMore() {
    const startIndex = this.displayedArray.length;
    const endIndex = Math.min(startIndex + this.displayCount, this.appsArray.length);
    this.displayedArray = this.displayedArray.concat(this.appsArray.slice(startIndex, endIndex));

  }
}
