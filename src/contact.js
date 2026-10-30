
import './style.css';

const app = document.querySelector('#root');

app.innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="/">BOBCLINTON HARDY<span>.</span></a>
    <nav aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/contact.html" aria-current="page">Contact</a>
      <a class="nav-cta" href="/contact.html">Let's Talk ↗</a>
    </nav>
  </header>

  <main class="contact-main">
    <section class="contact-heading">
      <p class="eyebrow">LET'S CONNECT</p>
      <h1>Have an idea?<br />Let's <span>talk about it.</span></h1>
      <p>
        Whether you're exploring a creative project, an AI-powered idea
        or a smarter workflow, I'd love to hear what you're working on.
      </p>
    </section>

    <section class="contact-layout">
      <div class="contact-form-panel">
        <p class="eyebrow">TELL ME ABOUT YOUR PROJECT</p>
        <h2>Start a conversation.</h2>

        <form id="contact-form">
          <label for="name">Your full name</label>
          <input id="name" name="name" type="text" autocomplete="name"
            placeholder="Full name" maxlength="150" required />

          <label for="email">Email address</label>
          <input id="email" name="email" type="email" autocomplete="email"
            placeholder="you@example.com" maxlength="254" required />

          <label for="project">What do you need help with?</label>
          <select id="project" name="project" required>
            <option value="">Choose a project type</option>
            <option>YouTube content</option>
            <option>Video editing</option>
            <option>AI prompt engineering</option>
            <option>AI filmmaking</option>
            <option>AI automation</option>
            <option>Creative collaboration</option>
            <option>Something else</option>
          </select>

          <label for="details">Tell me about your idea</label>
          <textarea id="details" name="details" rows="5" maxlength="10000"
            placeholder="What are you looking to create?" required></textarea>

          <button class="button button-primary" id="submit-button" type="submit">
            Send Message ↗
          </button>

          <p id="form-status" class="form-note" role="status" aria-live="polite"></p>
        </form>
      </div>

      
<aside class="contact-side">
  <p class="eyebrow">A GOOD PLACE TO START</p>
  <h2>Tell me what you're imagining.</h2>
  <p>
    A little context about your goals, timeline and the outcome
    you're looking for will help us take the next step.
  </p>

  <div class="contact-detail">
    <span>01</span>
    <div>
      <h3>Share the idea</h3>
      <p>Explain the project or problem you'd like to solve.</p>
    </div>
  </div>

  <div class="contact-detail">
    <span>02</span>
    <div>
      <h3>Explore the possibilities</h3>
      <p>We'll identify a practical direction for moving forward.</p>
    </div>
  </div>

  <div class="direct-contact">
    <h3>Prefer a direct conversation?</h3>
    <a class="button button-primary" href="https://wa.me/2349067086330" target="_blank" rel="noopener noreferrer">
      Chat on WhatsApp ↗
    </a>
    <p>
      Or call:
      <a href="tel:+2349067086330">+234 906 708 6330</a>
    </p>
  </div>

  <a class="back-link" href="/">← Back to the homepage</a>
</aside>

    </section>
  </main>

  
<footer class="site-footer">
  <a class="wordmark" href="/">BOBCLINTON HARDY<span>.</span></a>
  <p>Creative production. AI innovation. Smarter workflows.</p>

  <div class="social-links">
    <a href="https://www.tiktok.com/@bobclintonhardy1" target="_blank" rel="noopener noreferrer">TikTok ↗</a>
    <a href="https://youtube.com/@dhardystudio" target="_blank" rel="noopener noreferrer">YouTube ↗</a>
    <a href="https://wa.me/2349067086330" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
    <a href="tel:+2349067086330">Call: +234 906 708 6330</a>
  </div>

  <span>© ${new Date().getFullYear()} Bobclinton Hardy</span>
</footer>

`;

const form = document.querySelector('#contact-form');
const button = document.querySelector('#submit-button');
const status = document.querySelector('#form-status');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  button.disabled = true;
  button.textContent = 'Sending…';
  status.textContent = '';

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Unable to send your message.');
    }

    form.reset();
    status.textContent = 'Thank you! Your enquiry has been sent successfully.';
  } catch (error) {
    status.textContent =
      error.message || 'Something went wrong. Please try again later.';
  } finally {
    button.disabled = false;
    button.textContent = 'Send Message ↗';
  }
});
