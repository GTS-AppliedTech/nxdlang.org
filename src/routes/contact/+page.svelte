<svelte:head>
  <title>Contact Us</title>
  <meta name="description" content="Contact NXD project support and community placeholder page." />
</svelte:head>

<section class="contact-page">
  <div class="card">
    <p class="eyebrow">Contact Us</p>
    <h1>Contact NXD</h1>
    <p class="lead">Reach out to the NXD project team through email: hello@nxdlang.org or via the social links below. For additional information, browse the documentation for more information.</p>

    <div class="links">
      <a href="/">Back to home</a>
      <a href="/docs">Browse documentation</a>
    </div>

    <div class="social-cards">
      <div class="social-card email-card">
        <p class="social-type">Email</p>
        <a href="mailto:hello@nxdlang.org">
          hello@nxdlang.org
        </a>
      </div>
      <div class="social-card github-card">
        <p class="social-type">GitHub</p>
        <a
          href="https://github.com/GTS-AppliedTech/nxd_language"
          target="_blank"
          rel="noopener"
        >
          github.com/GTS-AppliedTech/nxd_language
        </a>
      </div>
      <div class="social-card x-card">
        <p class="social-type">X</p>
        <a 
          href="https://x.com/NXDLanguage"
          target="_blank"
          rel="noopener"
          >
          @NXDLanguage
        </a>
      </div>
      
    </div>
  </div>
</section>

<style>
  .contact-page {
    min-height: 80vh;
    display: grid;
    place-items: center;
    padding: 2.5rem 1.25rem;
    background: linear-gradient(135deg, #07111f 0%, #13293b 100%);
    color: #dce7f5;
  }

  .card {
    width: min(740px, 100%);
    padding: 2rem;
    border-radius: 1.25rem;
    background: rgba(7, 17, 31, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 26px 50px rgba(0, 0, 0, 0.24);
  }

  .eyebrow {
    margin: 0 0 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.8rem;
    color: #7ad7ff;
  }

  h1 {
    margin: 0 0 1rem;
    font-size: clamp(2.2rem, 4vw, 3rem);
  }

  .lead {
    margin: 0 0 1.75rem;
    line-height: 1.8;
    color: #dce7f5;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
  }

  .links a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 1.1rem;
    border-radius: 999px;
    text-decoration: none;
    background: #7ad7ff;
    color: #07111f;
    font-weight: 600;
  }

  .social-cards {
    display: grid;
    gap: 0.75rem;
    margin-top: 1.4rem;
  }

  .social-card {
    padding: 1rem;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(122, 215, 255, 0.18);
  }

  .social-type {
    margin: 0 0 0.35rem;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: #7ad7ff;
  }

  .social-card a {
    display: inline-block;
    color: #dce7f5;
    text-decoration: none;
    word-break: break-word;
  }

  .social-card a:hover {
    color: #7ad7ff;
  }

  .links a:hover {
    background: #9ce8ff;
  }
</style>
