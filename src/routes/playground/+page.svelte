<svelte:head>
  <title>NXD Playground</title>
  <meta name="description" content="The NXD Playground is under development." />
</svelte:head>

<section class="playground-page">
  <div class="card">
    <p class="eyebrow">Playground Status: In Development.</p>
    <h1>NXD Playground</h1>
    <p class="lead">The interactive NXD Playground is currently under development.</p>

    <div class="panel">
      <h2>The Playground will eventually provide:</h2>
      <ul>
        <li>Interactive code execution</li>
        <li>Backend transpilation previews</li>
        <li>Language experimentation</li>
        <li>Compiler diagnostics</li>
      </ul>
    </div>

    <p class="supporting-text">
      While development continues, explore real NXD examples and language features in the documentation.
    </p>

    <div class="actions">
      <a href="/docs#examples">View Examples</a>
      <a href="/docs#cookbook">View Cookbook</a>
      <a href="/docs#language-guide">View Language Guide</a>
    </div>
  </div>

  <div class="footer-note">
    <p>NXD is currently focused on specification, documentation, and architecture development.</p>
    <p>Documentation is the most up-to-date source of project progress.</p>
  </div>
</section>

<style>
  .playground-page {
    min-height: 80vh;
    display: grid;
    place-items: center;
    padding: 2.5rem 1.25rem;
    background: linear-gradient(135deg, #07111f 0%, #111c2e 100%);
    color: #f5f7fb;
  }

  .card {
    width: min(760px, 100%);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 1.25rem;
    padding: 2rem;
    background: rgba(7, 17, 31, 0.8);
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
    background: #7ad7ff;
    color: #07111f;
    font-weight: 600;
  }

  .actions a:hover {
    background: #9ce8ff;
  }

  .footer-note {
    margin-top: 1.25rem;
    text-align: center;
    color: #9fb0c5;
  }
</style>
