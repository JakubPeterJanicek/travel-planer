import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'transport-page',
  imports: [RouterLink],
  template: `
    <section class="page">
      <h2>Doprava</h2>

      <ul>
        <li>✈ Lietadlo</li>
        <li>🚆 Vlak</li>
        <li>🚗 Auto</li>
      </ul>

      <div class="nav">
        <button routerLink="/plan-trip">← Back</button>
        <button class="next" routerLink="/payment">Next →</button>
      </div>
    </section>
  `,
  styles: [`
    .page {
      min-height: 100vh;
      padding: 4rem 2rem;
      background: linear-gradient(to right, #8360c3, #2ebf91);
      color: white;
      text-align: center;
    }

    h2 {
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin-bottom: 4rem;
    }

    li {
      background: white;
      color: #333;
      margin: 1rem auto;
      padding: 1rem 2rem;
      border-radius: 10px;
      max-width: 300px;
      font-size: 1.2rem;
      font-weight: 500;
      transition: 0.3s ease;
      cursor: pointer;
    }

    li:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
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
      background: #ff7a18;
      color: white;
    }
  `]
})
export class TransportPage {}
