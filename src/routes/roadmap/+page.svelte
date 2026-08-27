<svelte:head>
  <title>NXD Development Roadmap</title>
  <meta name="description" content="View the roadmap for the NXD language project." />
</svelte:head>

<main class="roadmap-page">
<section>
    <div class="status-block">
      <h2>Current Status</h2>
      <p class="status">Active compiler validation and language development. NXD currently includes a functional compiler pipeline,
         semantic analysis framework, intermediate representation system, and an actively validated Nim backend.</p>
      <p class="status-callout">Stage 2 - Core Compiler & Open Source</p>
      <p class="status-subcallout"> Status: In Progress</p>
    </div>
      <div class="validation-summary">
        <p><strong>Validation Coverage:</strong> 64 Cases As of 08-25-2026</p>
        <p><strong>Positive Validation:</strong> 25 / 40 Passing</p>
        <p><strong>Negative Validation:</strong> 17 / 24 Correctly Rejected</p>
      </div>
      <p class="update-notice">
        Website content is updated weekly. For the most current
       project status, validation results, development activity,
       and source code, please visit the GitHub repository.
      </p>
</section>

<section>
    <div class="stage-block">
        <h2>Stage 1</h2>
        <p class="status-callout">Foundation & Public Presence</p>
        <p class="status-subcallout">Status: Complete</p>
        <ol>
            <li>✅ Project Scaffolding</li>
            <li>✅ Base Documentation</li>
            <li>✅ AI Documentation Review</li>
            <li>✅ Human Documentation Review</li>
            <li>✅ Website</li>
            <li>✅ Social Media</li>
            <li>✅ Public Repository</li>
            <li>✅ MIT License</li>
            <li>✅ Email & Support Channels</li>
            <li>✅ Branding Kit</li>
            <li>✅ Versioning Strategy</li>
            <li>✅ Contribution Guidelines</li>
            <li>✅ Code of Conduct</li>
            <li>✅ Vision & Philosophy</li>
        </ol>
    </div>
</section>

<section>
    <div class="stage-block">
        <h2>Stage 2</h2>
        <p class="status-callout">Core Compiler & Open Source</p>
        <p class="status-subcallout">Status: 🔄 In Progress</p>
        <ol>
            <li>✅ Scanner</li>
            <li>✅ Parser</li>
            <li>✅ AST Generation</li>
            <li>✅ Lowering</li>
            <li>✅ JSON IR</li>
            <li>✅ Python → Rust Handoff</li>
            <li>✅ Rust Loader</li>
            <li>✅ IR Root</li>
            <li>✅ NXD Semantics</li>
            <li>✅ Nim Backend</li>
            <li>✅ Validation Framework</li>
            <li>✅ Positive Validation Suite</li>
            <li>✅ Negative Validation Suite</li>
            <li>✅ Test Documentation Standards</li>

            <li>🔄 Parser Refinement</li>
            <li>🔄 Lexer Refinement</li>
            <li>🔄 Nim Conformance Validation</li>

            <li>⬜ CI/CD</li>
            <li>⬜ LSP Foundation</li>
            <li>⬜ Core Language Freeze</li>
        </ol>
        <h3>Exit Criteria</h3>
        <ol>
            <li>Positive validation substantially complete</li>
            <li>Negative validation substantially complete</li>
            <li>Nim backend validated</li>
            <li>Core language behavior stabilized</li>
        </ol>
    </div>
</section>

<section>
    <div class="stage-block">
        <h2>Stage 3</h2>
        <p class="status-callout">Validation & Technical Preview</p>
        <p class="status-subcallout">Status: ⏳ Planned</p>
        <ol>
            <li>⬜ Playground</li>
            <li>⬜ Playground Security Review</li>
            <li>⬜ Technical Preview</li>
            <li>⬜ Performance Baseline</li>
            <li>⬜ Public Conformance Matrix</li>
        </ol>
    </div>

</section>

<section>
    <div class="stage-block">
        <h2>Stage 4</h2>
        <p class="status-callout">Multi-Backend Ecosystem</p>
        <p class="status-subcallout">Status: ⏳ Planned</p>
        <ol>
            <li>⬜ D Backend</li>
            <li>⬜ D Validation</li>
            <li>⬜ Community Governance</li>
            <li>⬜ External Contributors</li>
        </ol>
    </div>
</section>

<section>
    <div class="stage-block">
        <h2>Stage 5</h2>
        <p class="status-callout">Runtime & Identity Exploration</p>
        <p class="status-subcallout">Status: ⏳ Planned</p>
        <ol>
            <li>⬜ Runtime Feasibility Study</li>
            <li>⬜ Runtime Architecture Proposal</li>
            <li>⬜ NXD Runtime Prototype</li>
            <li>⬜ Formal Semantics Draft</li>
        </ol>
    </div>
</section>

<section>
    <div class="stage-block">
        <h2>Stage 6</h2>
        <p class="status-callout">Expansion & Support</p>
        <p class="status-subcallout">Status: ⏳ Planned</p>
        <ol>
            <li>⬜ Elixir Backend</li>
            <li>⬜ Elixir Validation</li>
            <li>⬜ Support Model</li>
            <li>⬜ Stability Roadmap</li>
        </ol>
    </div>
</section>

<section>
    <div class="stage-block">
        <h2>Stage 7</h2>
        <p class="status-callout">Release Candidate & Launch</p>
        <p class="status-subcallout">Status: ⏳ Planned</p>
        <ol>
            <li>⬜ Documentation Freeze</li>
            <li>⬜ Security Audit</li>
            <li>⬜ RC1</li>
            <li>⬜ Launch Checklist</li>
            <li>⬜ NXD v1.0</li>
        </ol>
    </div>
</section>

<section>
    <div class="actions"></div>
    <a href="/test_index">View All Test Results</a>
    <a href="/docs/v1/projectlog">Project Changelog</a>
    <a href="/docs/v1/changelog">Website Changelog</a>
    <a href="/docs/v1/contributing">Contribution Guide</a>
</section>

<section>
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
</section>

<footer class="site-footer">
  <p>© 2026 G.T.S. Applied Technologies LLC</p>
</footer>
</main>
  
 <style> 
  .roadmap-page {
    min-height: 100vh;
    padding: 2.5rem 1.25rem;
    background: linear-gradient(135deg, #07111f 0%, #13253e 100%);
    color: #f5f7fb;
  }

  .roadmap-page > section {
    width: min(900px, 100%);
    margin: 0 auto 1.5rem;
  }

  .roadmap-page section:not(:has(.actions)):not(:has(.social-cards)) {
    padding: 1rem 1.1rem;
    border: 1px solid #334155;
    border-radius: 1rem;
    background: #07111f;
  }

  .roadmap-page h2,
  .roadmap-page h3 {
    color: #f5f7fb;
  }

  .roadmap-page p,
  .roadmap-page li {
    color: #dce7f5;
    line-height: 1.7;
  }

  .roadmap-page a {
    display: inline-flex;
    margin: 0 0.6rem 0.6rem 0;
    padding: 0.75rem 1rem;
    border-radius: 999px;
    background: #62a6f3;
    color: #07111f;
    font-weight: 600;
    text-decoration: none;
  }

  .roadmap-page a:hover {
    background: #7ad7ff;
  }

  .roadmap-page .social-card a {
    display: inline-block;
    margin: 0;
    padding: 0;
    background: transparent;
    color: #dce7f5;
  }

  .roadmap-page .social-card a:hover {
    color: #7ad7ff;
  }

  .roadmap-page .site-footer {
    width: min(900px, 100%);
    margin: 0 auto;
  }

  .social-cards {
    display: grid;
    gap: 0.75rem;
    margin-top: 1.4rem;
  }

  .social-card {
    padding: 1rem;
    border-radius: 1rem;
    background: #13253e;
    border: 1px solid #7ad7ff;
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

   .status-block {
    padding: 1rem 1.1rem;
    border-radius: 1rem;
    background: #07111f;
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
   