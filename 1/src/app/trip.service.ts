import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TripService {

  destinations = signal<string[]>([
    "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan",
    "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria",
    "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia",
    "Finland", "France", "Georgia", "Germany", "Greece", "Hungary",
    "Iceland", "Ireland", "Italy", "Japan", "Kazakhstan", "Latvia",
    "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova",
    "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway",
    "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia",
    "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey",
    "Ukraine", "United Kingdom", "Vatican City"
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
