import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Travel Planner';

  steps = signal([
    {
      title: 'Choose a Destination',
      text: 'Pick your dream location',
      icon: '📍',
    },
    {
      title: 'Plan Your Trip',
      text: 'Create your custom itinerary',
      icon: '🗺️',
    },
    {
      title: 'Travel & Enjoy',
      text: 'Have an unforgettable adventure',
      icon: '✈️',
    },
  ]);
}
 