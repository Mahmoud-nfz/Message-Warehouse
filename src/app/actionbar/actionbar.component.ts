import { Component } from '@angular/core';

@Component({
  selector: 'app-actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.less']
})
export class ActionbarComponent {
  do = () => {
    console.log('do');
  }
}
