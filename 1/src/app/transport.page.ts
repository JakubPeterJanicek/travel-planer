import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'transport-page',
  imports: [RouterLink],
  template: `
    <section class="page">
      <h2>3. Doprava</h2>

      <ul>
        <li>✈ Lietadlo</li>
        <li>🚆 Vlak</li>
        <li>🚗 Auto</li>
      </ul>

      <div class="nav">
        <button routerLink="/plan-trip">← Back</button>
        <button class="finish">Finish</button>
      </div>
    </section>
  `,
})
export class TransportPage {}
