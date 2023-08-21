import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bar-search',
  templateUrl: './bar-search.component.html',
  styleUrls: ['./bar-search.component.css']
})
export class BarSearchComponent {

  searchTerm: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  search() {
    this.searchEvent.emit(this.searchTerm);
  }

}
