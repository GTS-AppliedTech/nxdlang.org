<svelte:head>
  <title>NXD Language Project</title>
  <meta name="description" content="Welcome to the NXD language project homepage." />
</svelte:head>

<section class="hero">
  <div class="hero-content">
    <p class="eyebrow">Welcome to NXD Language Project</p>
    <h1>NXD</h1>
    <p class="subtitle">Pronounced “next”</p>

    <p class="lead">
      An open-source language specification designed for security, predictability, and transpilation across Nim, Elixir, and D.
    </p>

    <div class="actions">
      <a href="/docs/v1/vision">Read the Vision</a>
      <a href="/docs">Browse Documentation</a>
      <a href="/docs#examples">Explore Examples</a>
      <a href="/docs#reference-architecture">Reference Architectures</a>
      <a href="/docs/v1/contributing">How to Contribute</a>
      <a href="/docs/v1/license">View the MIT License</a>
    </div>

    <div class="status-block">
      <h2>Current Status</h2>
      <p class="status">Active specification and documentation development. The current public release focuses on architecture,
        specifications, examples, and reference documentation.</p>
      <p class="status-callout">Community Review Requested</p>
      <p>
        NXD is currently seeking feedback from experienced Nim, Elixir, and D developers.
      </p>
      <p>
        If you are fluent in one or more of these ecosystems, please consider reviewing the language specifications,
        backend mappings, examples, and reference architectures.
      </p>
      <p>
        Your feedback will help improve accuracy, consistency, and long-term viability of the project.
      </p>
    </div>
  </div>
</section>

<footer class="site-footer">
  <p>© 2026 G.T.S. Applied Technologies LLC</p>
</footer>

<style>
  .hero {
    min-height: 84vh;
    display: grid;
    place-items: center;
    padding: 2.5rem 1.25rem;
    background: linear-gradient(135deg, #07111f 0%, #13253e 100%);
    color: #f5f7fb;
  }

  .hero-content {
    width: min(900px, 100%);
    background: rgba(7, 17, 31, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 1.5rem;
    padding: 2rem;
    box-shadow: 0 24px 55px rgba(0, 0, 0, 0.28);
  }

  .eyebrow {
    margin: 0 0 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.8rem;
    color: #7ad7ff;
  }

  h1 {
    margin: 0;
    font-size: clamp(3rem, 5vw, 4.2rem);
    line-height: 1;
  }

  .subtitle {
    margin: 0.35rem 0 1rem;
    font-size: 1.1rem;
    color: #dce7f5;
  }

  .lead {
    font-size: 1.08rem;
    line-height: 1.75;
    color: #dce7f5;
    margin-bottom: 1.4rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.6rem;
  }

  .actions a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1rem;
    border-radius: 999px;
    text-decoration: none;
    background: #7ad7ff;
    color: #07111f;
    font-weight: 600;
  }

  .actions a:hover {
    background: #9ce8ff;
  }

  .status-block {
    padding: 1rem 1.1rem;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.06);
  }

  .status-block h2 {
    margin: 0 0 0.45rem;
    font-size: 1.05rem;
  }

  .status {
    margin: 0 0 0.35rem;
    font-weight: 600;
  }

  .status-callout {
    margin: 0 0 0.75rem;
    color: #7ad7ff;
    font-weight: 700;
  }

  .status-block p {
    margin: 0 0 0.6rem;
    line-height: 1.7;
    color: #dce7f5;
  }

  .site-footer {
    text-align: center;
    padding: 1rem 1.25rem 2rem;
    color: #9fb0c5;
  }
</style>
