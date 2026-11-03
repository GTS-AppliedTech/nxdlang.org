<svelte:head>
  <title>What's New in NXD</title>
  <meta
    name="description"
    content="The latest development updates, compiler changes, testing improvements, and project news from NXD."/>
</svelte:head>
<main class="whats-new-page">
  <article class="whats-new">

    <header>
      <h1>What's New in NXD</h1>
      <time datetime="2026-11-02">November 2, 2026</time>

      <h2>October brought tremendous changes to NXD</h2>

      <p>
        October was a major development month for NXD. Work went beyond
        adding individual language features and touched some of the
        foundational pieces of the compiler, runtime, diagnostics,
        testing infrastructure, and development tooling.
      </p>
    </header>

    <section>
      <h2>The compiler front end was rewritten in Rust</h2>

      <p>
        One of the largest changes was rewriting NXD's entire compiler
        front end in Rust.
      </p>

      <p>
        This wasn't simply a change in implementation language. It gave NXD
        a stronger foundation for continuing to develop its parser, semantic
        analysis, diagnostics, and intermediate representation while
        maintaining clearer boundaries between the different stages of
        compilation.
      </p>

      <p>
        That distinction is especially important as NXD continues toward
        its goal of supporting multiple backends. NXD's language semantics
        should be defined by NXD itself, rather than by the limitations or
        behavior of any one target language.
      </p>
    </section>

    <section>
      <h2>Exploring asynchronous NXD</h2>

      <p>
        October also included significant exploration into how asynchronous
        and concurrent programming should work within NXD.
      </p>

      <p>
        Rather than simply adopting the behavior of one of NXD's target
        languages, this work focused on determining what concepts such as
        tasks, synchronization, and channels should mean at the NXD
        language level.
      </p>

      <p>
        This also led to early runtime work needed to support those semantics
        consistently as NXD's backend support expands.
      </p>
    </section>

    <section>
      <h2>Better diagnostics for literals</h2>

      <p>
        NXD's diagnostic system also became considerably more precise.
      </p>

      <p>
        Literal handling received additional validation and dedicated
        diagnostics, allowing the compiler to identify specific problems
        earlier and provide more useful information about what went wrong
        and where.
      </p>

      <p>
        For someone writing NXD, the goal is simple: when the compiler
        rejects something, the error should help explain the problem instead
        of merely announcing that compilation failed.
      </p>
    </section>

    <section>
    <h2>A much larger test corpus</h2>

    <p>
        Testing expanded substantially alongside the compiler changes.
    </p>

    <p>
        The primary Nim test corpus grew from
        <strong>110 to 156 tests</strong>.
    </p>

    <p>
        <strong>Current overall pass rate:</strong>
        127 of 156 tests correctly passing or failing as expected
        (<strong>81.40%</strong>).
    </p>

    <p>
        An additional <strong>312 tests</strong> were introduced in preparation
        for the future <code>.d</code> and <code>.ex</code> backends.
    </p>

    <p>
        Those future-backend tests are particularly useful because NXD is
        being designed around its own language semantics. As additional
        backends mature, the same NXD behavior can be tested across them
        rather than developing a different interpretation of the language
        for each target.
    </p>
    </section>
    <section>
      <h2>Continuing the pace into November</h2>

      <p>
        November has already started with another structural change:
        <strong>
          the NXD VS Code extension now has its own repository.
        </strong>
      </p>

      <p>
        Previously, the compiler and editor tooling lived much closer
        together. Separating the extension gives the editor integration its
        own development and release lifecycle while allowing the
        <code>nxd_language</code> repository to remain focused on the
        language and compiler itself.
      </p>

      <p>
        The newly separated extension has now been packaged as a VSIX,
        published, and tested against the main NXD compiler repository.
        Parser and validation functionality have also been exercised after
        the move, including valid programs producing clean diagnostics and
        intentionally invalid programs continuing to report errors.
      </p>

      <p>
        In other words, the repositories may now be separate, but the
        development experience remains connected.
      </p>
    </section>

    <section>
      <h2>What's next?</h2>

      <p>
        With the extension migration complete, attention can return to
        expanding NXD itself. The roadmap is also being reevaluated as the
        language has evolved faster and somewhat differently than originally
        anticipated, with some requirements arriving earlier and new areas
        of work emerging along the way.
      </p>
    </section>

  </article>

<section>
  <div class="social-cards">
    <div class="social-card github-card">
      <p class="social-type">GitHub</p>
      <a
        href="https://github.com/GTS-AppliedTech/nxd_language"
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/GTS-AppliedTech/nxd_language
      </a>
    </div>

    <div class="social-card x-card">
      <p class="social-type">X</p>
      <a
        href="https://x.com/NXDLanguage"
        target="_blank"
        rel="noopener noreferrer"
      >
        @NXDLanguage
      </a>
    </div>
  </div>
</section>

<footer class="site-footer">
  <p>© 2026 G.T.S. Applied Technologies LLC</p>
</footer>
</main>

<style>
  .whats-new-page {
    min-height: 100vh;
    padding: 2.5rem 1.25rem;
    background: linear-gradient(135deg, #07111f 0%, #13253e 100%);
    color: #f5f7fb;
  }

  .whats-new-page > section {
    width: min(900px, 100%);
    margin: 0 auto 1.5rem;
  }

  .whats-new {
    width: min(900px, 100%);
    margin: 0 auto;
  }

  .whats-new header,
  .whats-new section {
    margin-bottom: 1.5rem;
    padding: 1rem 1.1rem;
    border: 1px solid #334155;
    border-radius: 1rem;
    background: #07111f;
  }

  .whats-new h1,
  .whats-new h2,
  .whats-new h3 {
    color: #f5f7fb;
  }

  .whats-new h1 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    line-height: 1;
  }

  .whats-new h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .whats-new p,
  .whats-new li {
    color: #dce7f5;
    line-height: 1.7;
  }

  .whats-new time {
    display: block;
    margin-bottom: 2rem;
    color: #62a6f3;
    font-weight: 600;
  }

  .whats-new strong {
    color: #f5f7fb;
  }

  .whats-new code {
    padding: 0.15rem 0.35rem;
    border-radius: 0.35rem;
    background: #13253e;
    color: #7ad7ff;
    font-family: monospace;
  }

  .whats-new-page a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.6rem 0.6rem 0;
    padding: 0.75rem 1rem;
    border-radius: 999px;
    background: #62a6f3;
    color: #07111f;
    font-weight: 600;
    text-decoration: none;
  }

  .whats-new-page a:hover {
    background: #7ad7ff;
  }

  .whats-new-page .social-card a {
    display: inline-block;
    margin: 0;
    padding: 0;
    background: transparent;
    color: #dce7f5;
    font-weight: 400;
    word-break: break-word;
  }

  .whats-new-page .social-card a:hover {
    color: #7ad7ff;
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

  .site-footer {
    width: min(900px, 100%);
    margin: 0 auto;
    text-align: center;
    padding: 1rem 1.25rem 2rem;
    color: #9fb0c5;
  }
</style>