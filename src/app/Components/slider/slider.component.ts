import { AfterViewInit, Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  ngAfterViewInit() {
    $('#carousal2').carousel();
  }
}
