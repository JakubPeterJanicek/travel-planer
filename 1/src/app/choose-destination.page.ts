import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { TripService } from './trip.service';
import { FormsModule } from '@angular/forms';

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
          Next →
        </button>
      </div>
    </section>
  `,
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
  }
}
