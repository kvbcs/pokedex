import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-searchbar',
  imports: [FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
// searchTerm: string = '';

// onSearchChange(value: string) {
//   console.log('Recherche mise à jour :', value);
// }
@Output() searchChange = new EventEmitter<string>();

onSearchChange(value: string): void {
  this.searchChange.emit(value);
}
}
