import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { TripService } from './trip.service';

@Component({
  standalone: true,
  selector: 'payment-page',
  imports: [RouterLink],
  template: `
    <section class="page">
      <h2>Payment</h2>

      <form class="payment-form">
        <input type="text" placeholder="Name on card" />
        <input type="text" placeholder="Card number" />
        <input type="text" placeholder="Expiration (MM/YY)" />
        <input type="text" placeholder="CVV" />
      </form>

      <div class="nav">
        <button routerLink="/transport">← Back</button>
        <button class="finish" (click)="finish()">Finish</button>
      </div>
    </section>
  `,
  styles: [`
    .page {
      min-height: 100vh;
      padding: 4rem 2rem;
      background: linear-gradient(to right, #141e30, #243b55);
      color: white;
      text-align: center;
    }

    h2 {
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }

    .payment-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 400px;
      margin: 0 auto 3rem auto;
    }

    input {
      padding: 0.8rem;
      border-radius: 8px;
      border: none;
      font-size: 1rem;
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

    button:not(.finish) {
      background: white;
      color: #333;
    }

    .finish {
      background: #ff7a18;
      color: white;
    }
  `],
})
export class PaymentPage {

  trip = inject(TripService);
  router = inject(Router);

  finish() {
    this.trip.resetSelection();
    this.router.navigate(['/']);
  }
}
