import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {

  @Input() showPopup: boolean = false;

  closePopup() {
    this.showPopup = false;
  }

}
