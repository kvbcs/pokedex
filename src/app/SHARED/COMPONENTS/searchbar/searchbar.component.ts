import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css',
})
export class SearchbarComponent {
  @Output() searchChange = new EventEmitter<string>();

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target?.value || '';
    this.searchChange.emit(value);
  }
}
