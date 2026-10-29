
import './style.css';

const app = document.querySelector('#root');

app.innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="index.html">BOBCLINTON HARDY<span>.</span></a>
    <nav aria-label="Main navigation">
      <a href="index.html">Home</a>
      <a href="index.html#about">About</a>
      <a href="index.html#services">Services</a>
      <a class="nav-cta" href="contact.html">Let's Talk ↗</a>
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
          <label for="name">Your name</label>
          <input id="name" name="name" type="text" autocomplete="name"
            placeholder="Full name" required />

          <label for="email">Email address</label>
          <input id="email" name="email" type="email" autocomplete="email"
            placeholder="you@example.com" required />

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
          <textarea id="details" name="details" rows="5"
            placeholder="What are you looking to create?" required></textarea>

          <button class="button button-primary" type="button" disabled>
            Contact form setup in progress
          </button>
          <p class="form-note">
            The form will be activated before the website goes live.
          </p>
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

        <a class="back-link" href="index.html">← Back to the homepage</a>
      </aside>
    </section>
  </main>

  <footer class="site-footer">
    <a class="wordmark" href="index.html">BOBCLINTON HARDY<span>.</span></a>
    <p>Creative production. AI innovation. Smarter workflows.</p>
    <span>© ${new Date().getFullYear()} Bobclinton Hardy</span>
  </footer>
`;
