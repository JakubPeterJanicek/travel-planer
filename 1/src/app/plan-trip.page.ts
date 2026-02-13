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
        <button class="next" routerLink="/transport">Next →</button>
      </div>
    </section>
  `,
  styles: [`
  .page {
    min-height: 100vh;
    padding: 4rem 2rem;
    background: linear-gradient(to right, #ff7a18, #ffb347);
    color: white;
    text-align: center;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 4rem;
  }

  .nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  button {
    padding: 0.8rem 1.6rem;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }

  button:not(.next) {
    background: white;
    color: #333;
  }

  .next {
    background: #2193b0;
    color: white;
  }
`],
})
export class PlanTripPage {}
