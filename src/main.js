
import './style.css';

const app = document.querySelector('#root');

app.innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#home">BOBCLINTON HARDY<span>.</span></a>
    <nav aria-label="Main navigation">
  <a href="/">Home</a>
  <a href="/contact.html">Contact</a>
  <a class="nav-cta" href="/contact.html">Let's Talk ↗</a>
</nav>
  </header>

  <main>
    <section class="hero" id="home">
      <p class="eyebrow">CREATIVE PRODUCTION · ARTIFICIAL INTELLIGENCE</p>
      <h1>Ideas into <span>extraordinary</span> digital experiences.</h1>
      <p class="hero-copy">
        I work at the intersection of video, storytelling and AI —
        creating compelling content and smarter digital workflows.
      </p>
      <div class="hero-actions">
  <a class="button button-primary" href="#services">Explore my work ↘</a>
  <a class="button button-secondary" href="/contact.html">Start a conversation</a>
</div>
      <div class="hero-note">
        <span class="status-dot"></span>
        VIDEO · AI FILMMAKING · CREATIVE AUTOMATION
      </div>
    </section>

    <section class="intro section" id="about">
      <p class="eyebrow">01 / A LITTLE ABOUT ME</p>
      <div>
        <h2>Creative thinking.<br /><span>Intelligent execution.</span></h2>
        <p>
          I'm Bobclinton Hardy. My interests span digital content,
          video editing, AI-assisted filmmaking, prompt engineering
          and automation. This portfolio is where creativity meets
          practical technology.
        </p>
      </div>
    </section>

    <section class="section services" id="services">
      <p class="eyebrow">02 / WHAT I DO</p>
      <h2>Ideas, shaped into <span>possibilities.</span></h2>
      <div class="service-grid">
        <article class="service-card">
          <span>01</span>
          <h3>YouTube Content</h3>
          <p>Content concepts, planning and engaging digital storytelling.</p>
        </article>
        <article class="service-card">
          <span>02</span>
          <h3>Video Editing</h3>
          <p>Thoughtful pacing, visual flow and polished post-production.</p>
        </article>
        <article class="service-card">
          <span>03</span>
          <h3>AI Prompt Engineering</h3>
          <p>Structured prompts designed to guide useful AI outputs.</p>
        </article>
        <article class="service-card">
          <span>04</span>
          <h3>AI Filmmaking</h3>
          <p>Exploring AI-assisted visuals and new ways to tell stories.</p>
        </article>
        <article class="service-card">
          <span>05</span>
          <h3>AI Automation</h3>
          <p>Exploring smarter workflows and practical task automation.</p>
        </article>
      </div>
    </section>

    <section class="closing section">
      <p class="eyebrow">HAVE A PROJECT IN MIND?</p>
      <h2>Let's make something <span>worth seeing.</span></h2>
      <a class="button button-primary" href="/contact.html">Get in touch ↗</a>
    </section>
  </main>

  
<footer class="site-footer">
  <a class="wordmark" href="#home">BOBCLINTON HARDY<span>.</span></a>
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
