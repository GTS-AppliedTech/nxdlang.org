<svelte:head>
  <title>NXD Development Roadmap</title>
  <meta name="description" content="View the roadmap for the NXD language project." />
</svelte:head>

<main class="roadmap-page">

  <header class="roadmap-header">
    <h1>NXD Development Roadmap</h1>
    <p>
      Follow the development of the NXD language, compiler, tooling,
      backends, and ecosystem.
    </p>
  </header>

<section>
    <div class="status-block">
      <h2>Current Status</h2>
      <p class="status">Active compiler validation and language development. NXD currently includes a functional compiler 
        pipeline, semantic analysis framework, intermediate representation system, and an actively validated Nim backend.</p>
      <p class="status-callout">Phase 3/4/5 - Language stabilization, Nim conformance, Developer tooling, Technical preview, 
        and Runtime exploration</p>
      <p class="status-subcallout"> Status: In Progress</p>
    </div>
      <div class="validation-summary">
        <p><strong>Validation Coverage:</strong> 156 Cases As of 11-09-2026</p>
        <p><strong>Positive Validation:</strong> 68 / 68 Correctly Passing (100%)</p>
        <p><strong>Negative Validation:</strong> 66 / 68 Correctly Rejected (97.06%)</p>
        <p><strong>Nim Specialty Validation</strong> 04 / 10 Correctly Passing/Failing (40.00%)</p>
        <p><strong>Overall Pass Rate:</strong> 138 / 156 Total Correctly Passing/Failing (87.34%)</p>

      </div>
      <div class="roadmap-note">
        <h3>How to read this Roadmap</h3>
        <p>Roadmap phases represent major areas of development rather than strict sequential gates. Work may overlap between
          phases where dependencies allow, and later phases may be completed before earlier phases are fully closed. Exit 
          criteria indicate when a phase is considered complete.</p>
      </div>
      <p class="update-notice">
        Website content is updated monthly. For the most current
       project status, validation results, development activity,
       and source code, please visit the GitHub repository.
      </p>
</section>

<section>
  <div class="stage-block">
    <h2>Phase 1</h2>
    <p class="status-callout">Foundation & Public Presence</p>
    <p class="status-subcallout">Status: Complete</p>

    <ul>
      <li>✅ Project scaffolding</li>
      <li>✅ Base documentation</li>
      <li>✅ AI documentation review</li>
      <li>✅ Human documentation review</li>
      <li>✅ Public website</li>
      <li>✅ Social media presence</li>
      <li>✅ Public repositories</li>
      <li>✅ MIT license</li>
      <li>✅ Email and support channels</li>
      <li>✅ Branding kit</li>
      <li>✅ Versioning strategy</li>
      <li>✅ Contribution guidelines</li>
      <li>✅ Code of Conduct</li>
      <li>✅ Vision and language philosophy</li>
    </ul>

    <h3>Exit Criteria:</h3>
    <ul>
      <li>✅ NXD has an established public identity</li>
      <li>✅ Project governance and contribution documents are published</li>
      <li>✅ Public development and communication channels are operational</li>
    </ul>
  </div>
</section>

<section>
  <div class="stage-block">
    <h2>Phase 2</h2>
    <p class="status-callout">Compiler Pipeline Foundation</p>
    <p class="status-subcallout">Status: Complete</p>

    <h3>Compiler Front End:</h3>
    <ul>
      <li>✅ Scanner and lexer foundation</li>
      <li>✅ Parser foundation</li>
      <li>✅ AST generation</li>
      <li>✅ Semantic analysis foundation</li>
      <li>✅ NXD language semantics foundation</li>
      <li>✅ Diagnostic framework</li>
      <li>✅ Warning diagnostics</li>
      <li>✅ Error diagnostics</li>
      <li>✅ Compiler front end rewritten in Rust</li>
    </ul>

    <h3>Intermediate Representation:</h3>
    <ul>
      <li>✅ Lowering pipeline</li>
      <li>✅ JSON IR</li>
      <li>✅ Rust IR loader</li>
      <li>✅ IR root structure</li>
      <li>✅ Shared semantic representation</li>
    </ul>

    <h3>Initial Backend:</h3>
    <ul>
      <li>✅ Nim backend foundation</li>
      <li>✅ Initial NXD-to-Nim lowering</li>
    </ul>

    <h3>Exit Criteria:</h3>
    <ul>
      <li>✅ Valid NXD source can move through the compiler pipeline</li>
      <li>✅ Invalid source produces structured diagnostics</li>
      <li>✅ The shared IR can represent the current core language</li>
      <li>✅ The Nim backend can lower supported NXD programs</li>
    </ul>
  </div>
</section>

<section>
  <div class="stage-block">
    <h2>Phase 3</h2>
    <p class="status-callout">
      Language Stabilization & Nim Conformance
    </p>
    <p class="status-subcallout">Status: In Progress</p>

    <h3>Language Refinement:</h3>
    <ul>
      <li>🔄 Parser refinement</li>
      <li>🔄 Lexer refinement</li>
      <li>🔄 Semantic rule refinement</li>
      <li>🔄 Diagnostic coverage expansion</li>
      <li>🔄 Literal validation refinement</li>
      <li>🔄 Trait and implementation validation</li>
      <li>🔄 Member-access semantics</li>
      <li>🔄 Core language behavior stabilization</li>
    </ul>

    <h3>Validation:</h3>
    <ul>
      <li>✅ Validation framework</li>
      <li>✅ Positive validation suite</li>
      <li>✅ Negative validation suite</li>
      <li>✅ Test documentation standards</li>
      <li>🔄 Positive validation expansion</li>
      <li>🔄 Negative validation expansion</li>
      <li>🔄 Nim conformance validation</li>
      <li>🔄 Backend-independent test corpus</li>
      <li>⬜ Public conformance matrix</li>
    </ul>

    <h3>Automation:</h3>
    <ul>
      <li>🔄 Continuous integration</li>
      <li>⬜ Automated regression testing</li>
      <li>⬜ Release artifact validation</li>
    </ul>

    <h3>Exit Criteria:</h3>
    <ul>
      <li>Positive validation is substantially complete</li>
      <li>Negative validation is substantially complete</li>
      <li>Nim output conforms to documented NXD behavior</li>
      <li>Compiler regressions are checked automatically</li>
      <li>Core language behavior is sufficiently stable for preview use</li>
    </ul>
  </div>
</section>

<section>
  <div class="stage-block">
    <h2>Phase 4</h2>
    <p class="status-callout">
      Developer Tooling & Technical Preview
    </p>
    <p class="status-subcallout">Status: In Progress</p>

    <h3>VS Code Extension:</h3>
    <ul>
      <li>✅ Dedicated extension repository</li>
      <li>✅ VSIX packaging</li>
      <li>✅ Visual Studio Marketplace publication</li>
      <li>✅ Syntax highlighting</li>
      <li>✅ File icons</li>
      <li>✅ Basic code completion</li>
      <li>✅ Error diagnostics</li>
      <li>✅ Warning diagnostics</li>
      <li>🔄 Go to definition</li>
      <li>🔄 Hover information</li>
      <li>⬜ Document symbols</li>
      <li>⬜ Extension release automation</li>
    </ul>

    <h3>Preview Environment:</h3>
    <ul>
      <li>⬜ End-to-end NXD-to-Nim compiler integration</li>
      <li>⬜ Web compilation service</li>
      <li>⬜ Browser-based playground</li>
      <li>⬜ Playground security review</li>
      <li>⬜ Performance baseline</li>
      <li>⬜ Technical Preview release</li>
      <li>⬜ Continuous deployment</li>
    </ul>

    <h3>Exit Criteria:</h3>
    <ul>
      <li>The extension supports the essential editing workflow</li>
      <li>The compiler can be exercised through a documented preview path</li>
      <li>The playground has appropriate execution safeguards</li>
      <li>Technical Preview limitations are documented</li>
      <li>Preview builds and artifacts can be published consistently</li>
    </ul>
  </div>
</section>

<section>
  <div class="stage-block">
    <h2>Phase 5</h2>
    <p class="status-callout">Runtime & Concurrency Semantics</p>
    <p class="status-subcallout">Status: Exploratory</p>

    <h3>Language Semantics:</h3>
    <ul>
      <li>🔄 Define task semantics</li>
      <li>🔄 Define synchronization semantics</li>
      <li>🔄 Define channel semantics</li>
      <li>🔄 Define failure and cancellation behavior</li>
      <li>🔄 Define backend-independent concurrency rules</li>
    </ul>

    <h3>Runtime Architecture:</h3>
    <ul>
      <li>🔄 Runtime feasibility study</li>
      <li>⬜ Runtime architecture proposal</li>
      <li>⬜ NXD runtime prototype</li>
      <li>⬜ Runtime validation suite</li>
      <li>⬜ Formal semantics draft</li>
    </ul>

    <h3>Exit Criteria:</h3>
    <ul>
      <li>Concurrency behavior is defined at the NXD language level</li>
      <li>Runtime responsibilities are separated from backend behavior</li>
      <li>The proposed semantics can be represented in the shared IR</li>
      <li>At least one backend can demonstrate the proposed model</li>
    </ul>
  </div>
</section>

<section>
  <div class="stage-block">
    <h2>Phase 6</h2>
    <p class="status-callout">D Backend & Multi-Backend Validation</p>
    <p class="status-subcallout">Status: Planned</p>

    <h3>D Backend:</h3>
    <ul>
      <li>⬜ D backend architecture</li>
      <li>⬜ D code generation</li>
      <li>⬜ D runtime integration</li>
      <li>⬜ D positive validation</li>
      <li>⬜ D negative validation</li>
      <li>⬜ Nim and D conformance comparison</li>
      <li>⬜ Cross-backend regression testing</li>
      <li>⬜ Public multi-backend conformance matrix</li>
    </ul>

    <h3>Exit Criteria:</h3>
    <ul>
      <li>Supported NXD programs can target Nim or D</li>
      <li>Both backends follow the same documented NXD semantics</li>
      <li>Backend differences and limitations are documented</li>
      <li>Shared tests run against both backends</li>
    </ul>
  </div>
</section>

<section>
  <div class="stage-block">
    <h2>Phase 7</h2>
    <p class="status-callout">Elixir Backend & Ecosystem Growth</p>
    <p class="status-subcallout">Status: Planned</p>

    <h3>Elixir Backend:</h3>
    <ul>
      <li>⬜ Elixir backend architecture</li>
      <li>⬜ Elixir code generation</li>
      <li>⬜ Elixir runtime integration</li>
      <li>⬜ Elixir positive validation</li>
      <li>⬜ Elixir negative validation</li>
      <li>⬜ Three-backend conformance validation</li>
    </ul>

    <h3>Project Growth:</h3>
    <ul>
      <li>⬜ Community governance model</li>
      <li>⬜ External contributor onboarding</li>
      <li>⬜ Maintainer procedures</li>
      <li>⬜ Support model</li>
      <li>⬜ Long-term stability policy</li>
    </ul>

    <h3>Exit Criteria:</h3>
    <ul>
      <li>Nim, D, and Elixir share documented core semantics</li>
      <li>Backend-specific limitations are publicly documented</li>
      <li>External contributions can be reviewed and integrated consistently</li>
      <li>Support and maintenance expectations are defined</li>
    </ul>
  </div>
</section>

<section>
  <div class="stage-block">
    <h2>Phase 8</h2>
    <p class="status-callout">Release Candidate & NXD v1.0</p>
    <p class="status-subcallout">Status: Planned</p>

    <ul>
      <li>⬜ Core language freeze</li>
      <li>⬜ Stable language specification</li>
      <li>⬜ Stable compiler interfaces</li>
      <li>⬜ Documentation freeze</li>
      <li>⬜ Security audit</li>
      <li>⬜ Performance and regression baseline</li>
      <li>⬜ Release Candidate 1</li>
      <li>⬜ Release Candidate validation</li>
      <li>⬜ Launch checklist</li>
      <li>⬜ NXD v1.0</li>
    </ul>

    <h3>Exit Criteria:</h3>
    <ul>
      <li>The documented core language is frozen for v1.0</li>
      <li>Release-blocking diagnostics and compiler defects are resolved</li>
      <li>Supported backends meet the published conformance requirements</li>
      <li>Installation, contribution, and migration documentation are complete</li>
      <li>NXD v1.0 artifacts can be reproduced and published consistently</li>
    </ul>
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
  .roadmap-header {
    width: min(900px, 100%);
    margin: 0 auto 1.5rem;
    padding: 1rem 1.1rem;
    border: 1px solid #334155;
    border-radius: 1rem;
    background: #07111f;
  }

  .roadmap-header h1 {
    margin: 0 0 0.75rem;
    color: #f5f7fb;
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    line-height: 1;
  }

  .roadmap-header p {
    margin: 0;
    color: #dce7f5;
    line-height: 1.7;
  }
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

  .roadmap-note {
    margin-top: 1.25rem;
    padding: 0.85rem 1rem;
    border-left: 3px solid #62a6f3;
    background: #13253e;
    border-radius: 0.5rem;
  }

  .roadmap-note h3 {
    margin: 0 0 0.4rem;
    font-size: 1rem;
    color: #f5f7fb;
  }

  .roadmap-note p {
    margin: 0;
    color: #dce7f5;
    line-height: 1.7;
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
   