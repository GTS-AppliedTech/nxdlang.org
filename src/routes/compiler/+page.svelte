<svelte:head>
  <title>NXD Compiler</title>
  <meta name="description" content="The NXD compiler is under development." />
</svelte:head>

<section class="compiler-page">
  <div class="card">
    <p class="eyebrow">NXD Compiler Status: Under Development</p>
    <h1>NXD Compiler</h1>
    <p class="lead">The NXD reference compiler is currently under active development.</p>

    <div class="panel">
      <h2>Compiler design documentation is available today, including:</h2>
      <ul>
        <li>Compiler Architecture</li>
        <li>IR Design</li>
        <li>Lowering Rules</li>
        <li>Backend Mapping</li>
        <li>Lexical Specifications</li>
      </ul>
    </div>

    <p class="supporting-text">
      Explore the technical documentation while implementation continues.
    </p>

    <div class="actions">
      <a href="/docs/v1/compiler/architecture">View Compiler Architecture</a>
      <a href="/docs/v1/compiler/ir-lowering">View IR Design</a>
      <a href="/docs/v1/backend/nxd-nim-mapping">View Backend Mapping</a>
    </div>
  </div>

  <div class="footer-note">
    <p>NXD is currently focused on specification, documentation, and architecture development.</p>
    <p>Documentation is the most up-to-date source of project progress.</p>
  </div>
</section>

<style>
  .compiler-page {
    min-height: 80vh;
    display: grid;
    place-items: center;
    padding: 2.5rem 1.25rem;
    background: linear-gradient(135deg, #080d16 0%, #16213b 100%);
    color: #f5f7fb;
  }

  .card {
    width: min(760px, 100%);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 1.25rem;
    padding: 2rem;
    background: rgba(8, 13, 22, 0.8);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
  }

  .eyebrow {
    margin: 0 0 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.8rem;
    color: #7ad7ff;
  }

  h1 {
    margin: 0 0 0.75rem;
    font-size: clamp(2rem, 3vw, 2.6rem);
  }

  .lead,
  .supporting-text,
  .footer-note p {
    line-height: 1.7;
    color: #dce7f5;
  }

  .panel {
    margin: 1.5rem 0;
    padding: 1rem 1.2rem;
    border-radius: 0.9rem;
    background: rgba(255, 255, 255, 0.06);
  }

  .panel h2 {
    margin: 0 0 0.75rem;
    font-size: 1rem;
  }

  ul {
    margin: 0;
    padding-left: 1.2rem;
  }

  li + li {
    margin-top: 0.4rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1.25rem;
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

  .footer-note {
    margin-top: 1.25rem;
    text-align: center;
    color: #9fb0c5;
  }
</style>
