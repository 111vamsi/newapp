import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Ensure this is correct
})
export class AppComponent {
  show: boolean = false; // Default to false to hide initially

  openPopup() {
    this.show = true;
  }

  closePopup() {
    this.show = false;
  }
}
