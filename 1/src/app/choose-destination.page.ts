<<<<<<< HEAD
import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { TripService } from './trip.service';
import { FormsModule } from '@angular/forms';
=======
import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
>>>>>>> b8610fd74a6b84b43271ad4a227f6e602d23189d

declare let L: any;

@Component({
  standalone: true,
  selector: 'choose-destination-page',
  imports: [RouterLink, FormsModule],
  template: `
    <section class="page">
      <h2>Choose a Destination</h2>

      <div class="search-box">
        <input
          type="text"
          placeholder="Search country or city..."
          [(ngModel)]="searchTerm"
        />

        @if (filteredDestinations().length > 0 && searchTerm) {
          <div class="suggestions">
            @for (item of filteredDestinations(); track item) {
              <div class="suggestion" (click)="selectFromSearch(item)">
                {{ item }}
              </div>
            }
          </div>
        }

        @if (tempSelected()) {
          <button class="confirm" (click)="confirmSelection()">
            Confirm
          </button>
        }
      </div>

      <h3>Most Popular</h3>

<<<<<<< HEAD
      <div class="destinations">
        @for (d of trip.destinations(); track d) {
          <div
            class="card"
            [class.active]="trip.selectedDestination() === d"
            (click)="trip.selectDestination(d)"
          >
            {{ d }}
          </div>
        }
      </div>

      <div class="nav">
        <button (click)="exit()">← Exit</button>
        <button
          class="next"
          [disabled]="!trip.selectedDestination()"
          routerLink="/plan-trip"
        >
=======
      <div class="layout">
        <!-- MAP -->
        <div class="map-wrapper">
          <div id="map"></div>
        </div>

        <!-- INFO -->
        <div class="info">
          @if (selectedCity) {
            <h3>{{ selectedCity.name }}</h3>
            <p>{{ selectedCity.description }}</p>

            <h4>Top sights</h4>
            <div class="gallery">
              @for (img of selectedCity.images; track img) {
                <img [src]="img" alt="sight" />
              }
            </div>
          } @else {
            <p class="placeholder">
              Click a city on the map 🌍
            </p>
          }
        </div>
      </div>

      <div class="nav">
        <button routerLink="/home.page">← Exit</button>
        <button
          class="next"
          routerLink="/plan-trip"
          [disabled]="!selectedCity">
>>>>>>> b8610fd74a6b84b43271ad4a227f6e602d23189d
          Next →
        </button>
      </div>
    </section>
  `,
<<<<<<< HEAD
  styles: [`
    .page {
      min-height: 100vh;
      padding: 4rem 2rem;
      background: linear-gradient(to right, #2193b0, #6dd5ed);
      color: white;
      text-align: center;
    }

    .search-box {
      max-width: 400px;
      margin: 0 auto 3rem auto;
      position: relative;
    }

    input {
      width: 100%;
      padding: 0.8rem;
      border-radius: 6px;
      border: none;
    }

    .suggestions {
      background: white;
      color: black;
      text-align: left;
      border-radius: 6px;
      margin-top: 5px;
      max-height: 150px;
      overflow-y: auto;
    }

    .suggestion {
      padding: 0.6rem;
      cursor: pointer;
    }

    .suggestion:hover {
      background: #f0f0f0;
    }

    .confirm {
      margin-top: 10px;
      background: #ff7a18;
      color: white;
      padding: 0.6rem 1rem;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    .destinations {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1rem;
      margin-bottom: 3rem;
    }

    .card {
      background: white;
      color: #333;
      padding: 1rem;
      border-radius: 10px;
      cursor: pointer;
    }

    .card.active {
      background: #fff9c4;
    }

    .nav {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .next {
      background: #141e30;
      color: white;
    }

    button {
      padding: 0.8rem 1.6rem;
      border-radius: 6px;
      border: none;
      cursor: pointer;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `],
})
export class ChooseDestinationPage {

  trip = inject(TripService);
  router = inject(Router);

  searchTerm = '';
  tempSelected = signal<string | null>(null);

  filteredDestinations = computed(() =>
    this.trip.destinations().filter(d =>
      d.toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  );

  selectFromSearch(item: string) {
    this.tempSelected.set(item);
  }

  confirmSelection() {
    if (this.tempSelected()) {
      this.trip.addDestination(this.tempSelected()!);
      this.trip.selectDestination(this.tempSelected()!);
      this.searchTerm = '';
      this.tempSelected.set(null);
    }
  }

  exit() {
    this.trip.resetSelection();
    this.router.navigate(['/']);
=======
  styleUrls: ['./choose-destination.page.css']
})
export class ChooseDestinationPage implements AfterViewInit {
  selectedCity: any = null;

  cities = [
    {
      name: 'Paris',
      lat: 48.8566,
      lng: 2.3522,
      description: 'City of love, fashion and culture.',
      images: [
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
        'https://images.unsplash.com/photo-1522098543979-ffc7f79d0e3f',
        'https://images.unsplash.com/photo-1543340713-8b9a6e9d6c13'
      ]
    },
    {
      name: 'Rome',
      lat: 41.9028,
      lng: 12.4964,
      description: 'Ancient city full of history.',
      images: [
        'https://images.unsplash.com/photo-1526481280691-3d4d8a44f35f',
        'https://images.unsplash.com/photo-1506806732259-39c2d0268443',
        'https://images.unsplash.com/photo-1549893074-0c89fca0f2f2'
      ]
    },
    {
      name: 'Barcelona',
      lat: 41.3851,
      lng: 2.1734,
      description: 'Architecture, beaches and nightlife.',
      images: [
        'https://images.unsplash.com/photo-1505731132164-cca9037f9f94',
        'https://images.unsplash.com/photo-1495567720989-cebdbdd97913',
        'https://images.unsplash.com/photo-1505842465776-3d90f6163100'
      ]
    }
  ];

  ngAfterViewInit() {
    const map = L.map('map').setView([46.8, 8.3], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    this.cities.forEach(city => {
      const marker = L.marker([city.lat, city.lng]).addTo(map);
      marker.bindPopup(city.name);

      marker.on('click', () => {
        this.selectedCity = city;
        localStorage.setItem('selectedCity', city.name);
      });
    });
>>>>>>> b8610fd74a6b84b43271ad4a227f6e602d23189d
  }
}
