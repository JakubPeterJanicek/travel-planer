import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TripService {

  destinations = signal<string[]>([
    'Paris',
    'Bali',
    'Tokyo',
    'New York',
    'London',
    'Rome'
  ]);

  selectedDestination = signal<string | null>(null);

  addDestination(name: string) {
    if (!this.destinations().includes(name)) {
      this.destinations.update(d => [...d, name]);
    }
  }

  selectDestination(name: string) {
    this.selectedDestination.set(name);
  }

  resetSelection() {
    this.selectedDestination.set(null);
  }
}
