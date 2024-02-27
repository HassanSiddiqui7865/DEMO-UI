import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-image',
  templateUrl: './work-image.component.html',
  styleUrls: ['./work-image.component.scss']
})
export class WorkImageComponent {
  @Input()image:any
}
