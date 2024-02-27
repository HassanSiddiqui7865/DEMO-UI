import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.scss']
})
export class IllustrationComponent implements OnInit {
  illustrationArray = [
    "https://businesslogodesign.us/assets/images/illustration/01.webp",
    "https://businesslogodesign.us/assets/images/illustration/02.webp",
    "https://businesslogodesign.us/assets/images/illustration/03.webp",
    "https://businesslogodesign.us/assets/images/illustration/04.webp",
    "https://businesslogodesign.us/assets/images/illustration/05.webp",
    "https://businesslogodesign.us/assets/images/illustration/06.webp",
    "https://businesslogodesign.us/assets/images/illustration/07.webp",
    "https://businesslogodesign.us/assets/images/illustration/08.webp",
    "https://businesslogodesign.us/assets/images/illustration/09.webp",
    "https://businesslogodesign.us/assets/images/illustration/10.webp",
    "https://businesslogodesign.us/assets/images/illustration/11.webp",
    "https://businesslogodesign.us/assets/images/illustration/12.webp",
    "https://businesslogodesign.us/assets/images/illustration/13.webp",
    "https://businesslogodesign.us/assets/images/illustration/14.webp",
    "https://businesslogodesign.us/assets/images/illustration/15.webp",
    "https://businesslogodesign.us/assets/images/illustration/16.webp",
    "https://businesslogodesign.us/assets/images/illustration/17.webp",
    "https://businesslogodesign.us/assets/images/illustration/18.webp",
    "https://businesslogodesign.us/assets/images/illustration/19.webp",
    "https://businesslogodesign.us/assets/images/illustration/20.webp",
    "https://businesslogodesign.us/assets/images/illustration/21.webp",
    "https://businesslogodesign.us/assets/images/illustration/22.webp",
    "https://businesslogodesign.us/assets/images/illustration/23.webp",
    "https://businesslogodesign.us/assets/images/illustration/24.webp",
    "https://businesslogodesign.us/assets/images/illustration/25.webp",
    "https://businesslogodesign.us/assets/images/illustration/26.webp",
    "https://businesslogodesign.us/assets/images/illustration/27.webp",
    "https://businesslogodesign.us/assets/images/illustration/28.webp",
    "https://businesslogodesign.us/assets/images/illustration/29.webp",
    "https://businesslogodesign.us/assets/images/illustration/30.webp",
  ]

  displayedArray: string[] = [];
  displayCount = 6;
  ngOnInit() {
    this.displayedArray = this.illustrationArray.slice(0,6)
  }

  loadMore() {
    const startIndex = this.displayedArray.length;
    const endIndex = Math.min(startIndex + this.displayCount, this.illustrationArray.length);
    this.displayedArray = this.displayedArray.concat(this.illustrationArray.slice(startIndex, endIndex));

  }
}
