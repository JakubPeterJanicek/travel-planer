import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

declare let L: any;

@Component({
  standalone: true,
  selector: 'choose-destination-page',
  imports: [RouterLink],
  template: `
    <section class="page">
      <h2>1. Choose a Destination</h2>

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
          Next →
        </button>
      </div>
    </section>
  `,
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
  }
}
