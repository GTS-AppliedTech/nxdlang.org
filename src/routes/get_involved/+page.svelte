<svelte:head>
  <title>Get Involved</title>
  <meta name="description" content="How to get involved with NXD."/>
</svelte:head>

<main class="get-involved">
  <article>

    <header>
      <h1>Get Involved</h1>

      <p>
        NXD is developed across several repositories, each focused on a
        different part of the language and its ecosystem. Contributions are
        welcome across language design, compiler development, editor tooling,
        documentation, testing, security, web development, and project review.
      </p>

      <p>
        You do not need to be a compiler developer to contribute. Testing NXD
        on a different operating system, reviewing documentation, reporting
        unexpected behavior, or identifying an unclear part of the language
        can all help improve the project.
      </p>
    </header>


    <section>
      <h2>Ways to Contribute</h2>

      <p>
        NXD has several areas where contributors can help:
      </p>

      <ul>
        <li>Language and semantic design</li>
        <li>Compiler development</li>
        <li>Diagnostics and error reporting</li>
        <li>Testing and quality assurance</li>
        <li>Cross-platform and environment testing</li>
        <li>Editor and IDE integration</li>
        <li>Language Server Protocol development</li>
        <li>Documentation and technical review</li>
        <li>Security review</li>
        <li>Web development and accessibility</li>
        <li>Bug reports and general project feedback</li>
      </ul>
    </section>


    <section>
      <h2>Language and Compiler</h2>

      <p>
        The
        <a href="https://github.com/GTS-AppliedTech/nxd_language">
          NXD language and compiler repository
        </a>
        is the primary repository for development of the language itself.
        This includes the compiler, language semantics, diagnostics, testing,
        and related core development.
      </p>

      <h3>Areas of Interest</h3>

      <ul>
        <li>Language and semantic design</li>
        <li>Compiler architecture</li>
        <li>Parsing and semantic analysis</li>
        <li>Intermediate representation and lowering</li>
        <li>Compiler diagnostics</li>
        <li>Backend development</li>
        <li>Testing and regression coverage</li>
        <li>Security and code review</li>
      </ul>

      <h3>Current Goals</h3>

      <ul>
        <li>Continue expanding and stabilizing the NXD language.</li>
        <li>Improve semantic validation and compiler diagnostics.</li>
        <li>Expand positive, negative, and regression test coverage.</li>
        <li>Improve consistency across supported compiler targets.</li>
        <li>Continue reviewing compiler architecture as the language evolves.</li>
      </ul>
    </section>


    <section>
      <h2>Editor and IDE Development</h2>

      <p>
        Editor tooling and Language Server Protocol development take place in
        the
        <a href="https://github.com/GTS-AppliedTech/nxd-extension">
          NXD extension repository
        </a>.
      </p>

      <p>
        Although VS Code is currently an important development environment,
        NXD's editor tooling is not intended to be limited to a single editor.
        LSP-based tooling creates opportunities to support additional editors
        and IDE environments.
      </p>

      <h3>Current Goals</h3>

      <ul>
        <li>Improve the NXD editing experience in VS Code.</li>
        <li>Expand Language Server Protocol capabilities.</li>
        <li>Improve editor diagnostics and language awareness.</li>
        <li>Support NXD tooling in additional LSP-compatible editors and IDEs.</li>
        <li>Test editor tooling across different operating systems and development environments.</li>
      </ul>
    </section>


    <section>
      <h2>Website and Documentation</h2>

      <p>
        The source for this website is available through the
        <a href="https://github.com/GTS-AppliedTech/nxdlang.org">
          nxdlang website repository
        </a>.
      </p>

      <p>
        Contributions to the website do not require compiler development
        experience. Documentation review, examples, accessibility improvements,
        usability feedback, and web development are all useful contributions.
      </p>

      <h3>Current Goals</h3>

      <ul>
        <li>Keep documentation synchronized with the evolving language.</li>
        <li>Improve language guides, examples, and learning material.</li>
        <li>Improve navigation and documentation discoverability.</li>
        <li>Maintain responsive and accessible web content.</li>
        <li>Make NXD easier for new users to understand and explore.</li>
      </ul>
    </section>


    <section>
      <h2>Platform and Environment Testing</h2>

      <p>
        Cross-platform testing is an important part of NXD development.
        Compiler binaries and development tooling can behave differently
        depending on both the operating system and the environment in which
        they are being used.
      </p>

      <h3>Operating Systems</h3>

      <ul>
        <li>Linux</li>
        <li>Windows</li>
        <li>macOS on Intel</li>
        <li>macOS on Apple Silicon</li>
      </ul>

      <h3>Development Environments</h3>

      <ul>
        <li>Locally cloned repositories</li>
        <li>VS Code</li>
        <li>GitHub Codespaces</li>
        <li>Other LSP-compatible editors and IDEs</li>
      </ul>

      <p>
        A successful build or test in one environment does not necessarily
        confirm correct behavior in another. Contributors can help by testing
        releases, installation instructions, compiler behavior, language
        tooling, and editor integration across different combinations of
        operating systems and development environments.
      </p>

      <h3>Testing Contributions</h3>

      <ul>
        <li>Test NXD release binaries on supported platforms.</li>
        <li>Run compiler tests in different operating systems.</li>
        <li>Test clean installations and setup instructions.</li>
        <li>Compare local development with GitHub Codespaces.</li>
        <li>Test the NXD extension and language server.</li>
        <li>Test NXD tooling in additional editors and IDEs.</li>
        <li>Report platform-specific or environment-specific behavior.</li>
      </ul>
    </section>


    <section>
      <h2>Historical and Reference Development</h2>

      <p>
        The
        <a href="https://github.com/GTS-AppliedTech/nxd-rust-frontend">
          archived NXD Python frontend repository
        </a>
        preserves part of NXD's transition from its original Python frontend
        toward its newer Rust-based frontend architecture.
      </p>

      <p>
        This repository does <strong>not</strong> have an active development roadmap, but it
        remains available as a technical and historical reference for people
        interested in NXD's compiler architecture and its evolution.
      </p>

      <ul>
        <li>Study the evolution of the NXD compiler.</li>
        <li>Review earlier implementation decisions.</li>
        <li>Compare compiler architecture and frontend approaches.</li>
        <li>Use the repository for technical or historical research.</li>
      </ul>
    </section>


    <section>
      <h2>Not Sure Where to Start?</h2>

      <p>
        You do not need to submit code to help improve NXD.
      </p>

      <p>
        Bug reports, documentation corrections, test results, language design
        feedback, security observations, code review, platform testing, and
        reports of confusing or unexpected behavior are all useful
        contributions.
      </p>

      <p>
        If you are interested in compiler or language development, start with
        the
        <a href="https://github.com/GTS-AppliedTech/nxd_language">
          NXD language and compiler
        </a>.
        For editor and IDE development, visit the
        <a href="https://github.com/GTS-AppliedTech/nxd-extension">
          NXD extension project
        </a>.
        For documentation or web development, visit the
        <a href="https://github.com/GTS-AppliedTech/nxdlang.org">
          nxdlang website project
        </a>.
      </p>
    </section>


    <section>
      <h2>Community Standards</h2>

      <p>
        Everyone participating in the NXD project is expected to follow the
        project's
        <a href="https://github.com/GTS-AppliedTech/nxdlang.org/blob/main/CODE_OF_CONDUCT.md"
            target="_blank"
            rel="noopener noreferer">
          Code of Conduct
        </a>.
        <strong>The Code of Conduct applies across the NXD repository ecosystem.</strong>
      </p>
    </section>

  </article>
</main>