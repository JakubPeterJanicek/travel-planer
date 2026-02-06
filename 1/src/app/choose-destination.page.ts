import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'choose-destination-page',
  imports: [RouterLink],
  template: `
    <section class="page">
      <h2>1. Choose a Destination</h2>

      <div class="destinations">
        @for (d of destinations; track d) {
          <div class="card">{{ d }}</div>
        }
      </div>

      <div class="nav">
        <button routerLink="/home.page ">← Exit</button>
        <button class="next" routerLink="/plan-trip">Next →</button>
      </div>
    </section>
  `,
})
export class ChooseDestinationPage {
  destinations = ['Paris', 'Bali', 'Tokyo', 'New York'];
}
