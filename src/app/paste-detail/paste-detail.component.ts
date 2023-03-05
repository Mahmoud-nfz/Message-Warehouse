import { Component, Input } from '@angular/core';
import { Paste } from '../paste';

@Component({
  selector: 'app-paste-detail',
  templateUrl: './paste-detail.component.html',
  styleUrls: ['./paste-detail.component.less']
})
export class PasteDetailComponent {
  @Input() paste?: Paste;
  @Input() saveFunction? : Function;
}
