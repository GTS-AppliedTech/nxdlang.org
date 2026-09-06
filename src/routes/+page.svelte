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
      <a href="/docs/v1/contributing">How to Contribute</a>
      <a href="/docs/v1/license">View the MIT License</a>
    </div>

    <div class="status-block">
      <h2>Current Status</h2>
      <p class="status">Active compiler validation and language development. NXD currently includes a functional compiler pipeline,
         semantic analysis framework, intermediate representation system, and an actively validated Nim backend.</p>
      <p class="status-callout">Stage 2 - Core Compiler & Open Source</p>
      <p class="status-subcallout"> Status: In Progress</p>

      <p>
        NXD is currently undergoing structured validation and is seeking feedback from Nim, D, Elixir,
         compiler, security, and language design contributors.
      </p>
      <div class="milestone-meter" role="img" aria-label="Current development stage: Stage 2 of 7">
        <div class="meter-heading">
          <span>Current Development Stage</span>
          <strong>Stage 2 / 7</strong>
        </div>
        <div class="thermometer" aria-hidden="true">
          <div class="thermometer-tube">
            <span class="milestone-segment"></span>
            <span class="milestone-segment"></span>
            <span class="milestone-segment"></span>
            <span class="milestone-segment"></span>
            <span class="milestone-segment"></span>
            <span class="milestone-segment active"></span>
            <span class="milestone-segment active"></span>
          </div>
          <div class="thermometer-bulb"></div>
        </div>
        <div class="meter-caption">
          <span>Current Stage</span>
          <span>Core Compiler & Open Source</span>
        </div>
      </div>

      <div class="validation-summary">
        <p><strong>Validation Coverage:</strong> 83 Cases As of 09-05-2026</p>
        <p><strong>Positive Validation:</strong> 38 / 40 Passing (95.0%)</p>
        <p><strong>Negative Validation:</strong> 23 / 33 Correctly Rejected (69.7%)</p>
        <p><strong>Nim Specialty Validation</strong> 08 / 10 Correctly Passing (80.0%)</p>

      </div>
          
      <div class="actions">
        <a href="/roadmap">View All Stage Details</a>
        <a href="/test_index">View All Test Results</a>
      </div>
      <p class="update-notice">
        Website content is updated weekly. For the most current
       project status, validation results, development activity,
       and source code, please visit the GitHub repository.
      </p>
      <p>
        If you are fluent in one or more of these ecosystems, please consider reviewing the language specifications,
        backend mappings, examples, and reference architectures.
      </p>
      <p>
        Your feedback will help improve accuracy, consistency, and long-term viability of the project.
      </p>
    </div>

    <div class="social-cards">
      <div class="social-card github-card">
        <p class="social-type">GitHub</p>
        <a href="https://github.com/GTS-AppliedTech/nxd_language" target="_blank" rel="noopener">github.com/GTS-AppliedTech/nxd_language</a>
      </div>
      <div class="social-card x-card">
        <p class="social-type">X</p>
        <a href="https://x.com/NXDLanguage" target="_blank" rel="noopener">@NXDLanguage</a>
      </div>
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
    color: #62a6f3;
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
    color: #62a6f3;
  }

  .social-card a {
    display: inline-block;
    color: #dce7f5;
    text-decoration: none;
    word-break: break-word;
  }

  .social-card a:hover {
    color: #62a6f3;
  }

  .actions a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1rem;
    border-radius: 999px;
    text-decoration: none;
    background: #62a6f3;
    color: #07111f;
    font-weight: 600;
  }

  .actions a:hover {
    background: #62a6f3;
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
    color: #62a6f3;
    font-weight: 700;
  }

  .status-subcallout {
  margin: -0.35rem 0 0.75rem;
  color: #9fb0c5;
  font-size: 0.9rem;
  font-style: italic;
}

  .milestone-meter {
    margin: 1.25rem 0 1.1rem;
    padding: 1rem;
    border: 1px solid rgba(98, 166, 243, 0.22);
    border-radius: 0.75rem;
    background: rgba(7, 17, 31, 0.42);
  }

  .meter-heading,
  .meter-caption {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .meter-heading {
    align-items: baseline;
    color: #dce7f5;
    font-size: 0.9rem;
  }

  .meter-heading strong {
    color: #7ad7ff;
    font-size: 1.2rem;
  }

  .thermometer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0 0.7rem;
  }

  .thermometer-tube {
    display: grid;
    grid-template-rows: repeat(7, 0.55rem);
    gap: 0.2rem;
    width: min(100%, 22rem);
    padding: 0.45rem 0.55rem;
    border: 1px solid rgba(220, 231, 245, 0.2);
    border-radius: 999px 999px 0.35rem 0.35rem;
    background: rgba(220, 231, 245, 0.08);
  }

  .milestone-segment {
    display: block;
    border-radius: 999px;
    background: rgba(220, 231, 245, 0.18);
  }

  .milestone-segment.active {
    background: #7ad7ff;
    box-shadow: 0 0 10px rgba(122, 215, 255, 0.48);
  }

  .thermometer-bulb {
    width: 1.6rem;
    height: 1.6rem;
    margin-top: -0.35rem;
    border: 1px solid rgba(220, 231, 245, 0.2);
    border-radius: 50%;
    background: #7ad7ff;
    box-shadow: 0 0 14px rgba(122, 215, 255, 0.5);
  }

  .meter-caption {
    color: #9fb0c5;
    font-size: 0.78rem;
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
