import { Component, OnInit } from '@angular/core';
import { ContactUsformComponent } from '../Components/contact-usform/contact-usform.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageArray = [
    "https://businesslogodesign.us/assets/images/web/01.webp",
    "https://businesslogodesign.us/assets/images/web/02.webp",
    "https://businesslogodesign.us/assets/images/web/03.webp",
    "https://businesslogodesign.us/assets/images/web/04.webp",
    "https://businesslogodesign.us/assets/images/web/05.webp",
    "https://businesslogodesign.us/assets/images/web/06.webp",
    "https://businesslogodesign.us/assets/images/web/07.webp",
    "https://businesslogodesign.us/assets/images/web/08.webp",
    "https://businesslogodesign.us/assets/images/web/09.webp",
    "https://businesslogodesign.us/assets/images/web/10.webp",
    "https://businesslogodesign.us/assets/images/web/11.webp",
    "https://businesslogodesign.us/assets/images/web/12.webp",
    "https://businesslogodesign.us/assets/images/web/13.webp",
    "https://businesslogodesign.us/assets/images/web/14.webp",
    "https://businesslogodesign.us/assets/images/web/15.webp",
    "https://businesslogodesign.us/assets/images/web/16.webp",
    "https://businesslogodesign.us/assets/images/web/17.webp",
    "https://businesslogodesign.us/assets/images/web/18.webp",
    "https://businesslogodesign.us/assets/images/web/19.webp",
    "https://businesslogodesign.us/assets/images/web/20.webp",
    "https://businesslogodesign.us/assets/images/web/21.webp",
    "https://businesslogodesign.us/assets/images/web/22.webp",
    "https://businesslogodesign.us/assets/images/web/23.webp",
    "https://businesslogodesign.us/assets/images/web/24.webp",
    "https://businesslogodesign.us/assets/images/web/25.webp",
    "https://businesslogodesign.us/assets/images/web/26.webp",
    "https://businesslogodesign.us/assets/images/web/27.webp",
    "https://businesslogodesign.us/assets/images/web/28.webp",
    "https://businesslogodesign.us/assets/images/web/29.webp",
    "https://businesslogodesign.us/assets/images/web/30.webp",
    "https://businesslogodesign.us/assets/images/web/31.webp",
    "https://businesslogodesign.us/assets/images/web/32.webp",
    "https://businesslogodesign.us/assets/images/web/33.webp",
    "https://businesslogodesign.us/assets/images/web/34.webp",
    "https://businesslogodesign.us/assets/images/web/35.webp",
    "https://businesslogodesign.us/assets/images/web/36.webp",
    "https://businesslogodesign.us/assets/images/web/37.webp",
    "https://businesslogodesign.us/assets/images/web/38.webp",
    "https://businesslogodesign.us/assets/images/web/39.webp", 
  ];
  displayedArray: string[] = [];
  displayCount = 6;
  ngOnInit() {
    this.displayedArray = this.imageArray.slice(0,6)
  }

  loadMore() {
    const startIndex = this.displayedArray.length;
    const endIndex = Math.min(startIndex + this.displayCount, this.imageArray.length);
    this.displayedArray = this.displayedArray.concat(this.imageArray.slice(startIndex, endIndex));

  }
}
