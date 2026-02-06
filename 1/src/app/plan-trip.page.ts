import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'plan-trip-page',
  imports: [RouterLink],
  template: `
    <section class="page">
      <h2>2. Plan Your Trip</h2>

      <p>Choose dates, hotels, activities...</p>

      <div class="nav">
        <button routerLink="/choose-destination">← Back</button>
        <button class="next" routerLink="/transport">
          Next →
        </button>
      </div>
    </section>
  `,
})
export class PlanTripPage {}
