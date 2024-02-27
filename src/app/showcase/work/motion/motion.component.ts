import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.component.html',
  styleUrls: ['./motion.component.scss'],
})
export class MotionComponent implements OnInit {
  motionArray = [
    'https://img.youtube.com/vi/k6sESMwsEWw/hqdefault.jpg',
    'https://img.youtube.com/vi/eQQCGJtKuMU/hqdefault.jpg',
    'https://img.youtube.com/vi/epNr1clxG3Y/hqdefault.jpg',
    'https://img.youtube.com/vi/OB4C1AVd9qo/hqdefault.jpg',
    'https://img.youtube.com/vi/-0dfLT0UQjA/hqdefault.jpg',
    'https://img.youtube.com/vi/MfdnkFcsEbA/hqdefault.jpg',
    'https://img.youtube.com/vi/pB2Qmg40EDc/hqdefault.jpg',
    'https://img.youtube.com/vi/v-rVRb84ZOo/hqdefault.jpg',
    'https://img.youtube.com/vi/cVcwNwnh0Vs/hqdefault.jpg',
    'https://img.youtube.com/vi/7nd9dDh-FyA/hqdefault.jpg',
    'https://img.youtube.com/vi/WpBdVVeVQg0/hqdefault.jpg',
    'https://img.youtube.com/vi/7Rw2TT0_srw/hqdefault.jpg',
    'https://img.youtube.com/vi/-DAWtneVAY0/hqdefault.jpg',
    'https://img.youtube.com/vi/9N4IziDaIio/hqdefault.jpg',
    'https://img.youtube.com/vi/MBTh-wyfu1I/hqdefault.jpg',
    'https://img.youtube.com/vi/kMg4rP63JaE/hqdefault.jpg',
    'https://img.youtube.com/vi/iLVitJWzwl4/hqdefault.jpg',
    'https://img.youtube.com/vi/f0rtYaaujgs/hqdefault.jpg',
    'https://img.youtube.com/vi/yn3KiPC3SCY/hqdefault.jpg',
    'https://img.youtube.com/vi/3yDWlDcC6-Y/hqdefault.jpg',
    'https://img.youtube.com/vi/fAtnKZGzWfM/hqdefault.jpg',
    'https://img.youtube.com/vi/V5IVtaQniXY/hqdefault.jpg',
    'https://img.youtube.com/vi/grugr-gsvTM/hqdefault.jpg',
    'https://img.youtube.com/vi/qNGBaairAsk/hqdefault.jpg',
    'https://img.youtube.com/vi/yluXLjXiHIA/hqdefault.jpg',
    'https://img.youtube.com/vi/1d0wPCR8sCQ/hqdefault.jpg',
  ];

  displayedArray: string[] = [];
  displayCount = 6;
  ngOnInit() {
    this.displayedArray = this.motionArray.slice(0,6)
  }

  loadMore() {
    const startIndex = this.displayedArray.length;
    const endIndex = Math.min(startIndex + this.displayCount, this.motionArray.length);
    this.displayedArray = this.displayedArray.concat(this.motionArray.slice(startIndex, endIndex));

  }
}
