import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'home-page',
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-content">
        <h1>Plan Your Perfect Trip</h1>
        <p>Discover amazing places and create your ideal itinerary</p>

        <div class="hero-buttons">
          <button class="btn primary" routerLink="/choose-destination">
            Start Planning
          </button>
          <button class="btn secondary">Watch Video</button>
        </div>
      </div>
    </section>

    <section class="how-it-works">
      <h2>How It Works</h2>

      <div class="steps">
        @for (step of steps(); track step.title) {
          <div class="step">
            <div class="icon">{{ step.icon }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>
        }
      </div>
    </section>

    <section class="cta">
      <h2>Get Ready for Your Next Adventure</h2>
      <p>Join us and start planning your perfect getaway today</p>
      <button class="btn primary">Sign Up Now</button>
    </section>
  `,
  styles: [
    `
      .hero {
  height: 90vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')
      center / cover no-repeat;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  color: white;
}

.hero-content {
  max-width: 600px;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  padding: 0.8rem 1.6rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.primary {
  background: #ff7a18;
  color: white;
}

.secondary {
  background: white;
  color: #333;
}

.how-it-works {
  padding: 4rem 2rem;
  text-align: center;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.step {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta {
  background: linear-gradient(to right, #2193b0, #6dd5ed);
  color: white;
  text-align: center;
  padding: 4rem 2rem;
}
 
    `,
  ],
})
export class HomePage {
  steps = signal([
    {
      title: 'Choose a Destination',
      text: 'Pick your dream location',
      icon: '📍',
    },
    {
      title: 'Plan Your Trip',
      text: 'Create your custom itinerary',
      icon: '🗺️',
    },
    {
      title: 'Travel & Enjoy',
      text: 'Have an unforgettable adventure',
      icon: '✈️',
    },
  ]);
}
