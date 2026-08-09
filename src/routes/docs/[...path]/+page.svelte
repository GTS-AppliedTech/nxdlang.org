<script>
  import { page } from '$app/stores';

  /** @type {Record<string, string>} */
  const docModules = import.meta.glob('../**/*.{md,txt}', { eager: true, query: '?raw', import: 'default' });

  /**
   * @param {string} value
   */
  function slugify(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  /**
   * @param {string} filePath
   */
  function titleFromContent(filePath) {
    const content = /** @type {string | undefined} */ (docModules[filePath]);
    const headingMatch = content?.match(/^#\s+(.+)$/m);
    if (headingMatch) return headingMatch[1].trim();

    const fileName = filePath.split('/').pop() || 'Document';
    const cleanName = fileName.replace(/\.(md|txt)$/i, '').replace(/[-_]/g, ' ');
    return cleanName.replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  /**
   * @param {string | string[] | undefined} value
   */
  function normalizeSegments(value) {
    if (!value) return [];
    if (Array.isArray(value)) return value.filter(Boolean);
    return value.split('/').filter(Boolean);
  }

  /**
   * @param {string[]} segments
   */
  function resolveDocument(segments) {
    const requested = segments.map((segment) => slugify(segment)).join('/');

    for (const [modulePath, content] of Object.entries(docModules)) {
      const cleanPath = modulePath.replace(/^\.\.\//, '').replace(/\\/g, '/');
      const normalized = cleanPath.replace(/\.(md|txt)$/i, '');
      const routeSlug = normalized
        .split('/')
        .filter(Boolean)
        .map((segment) => slugify(segment))
        .join('/');

      if (routeSlug === requested) {
        return {
          path: cleanPath,
          title: titleFromContent(modulePath),
          content: /** @type {string} */ (content)
        };
      }
    }

    return null;
  }

  const segments = normalizeSegments($page.params.path);
  const document = resolveDocument(segments);
</script>

<svelte:head>
  <title>{document ? document.title : 'Document Not Found'}</title>
  <meta name="description" content="NXD documentation content" />
</svelte:head>

<section class="doc-view-page">
  {#if document}
    <header class="doc-header">
      <p class="eyebrow">Documentation</p>
      <h1>{document.title}</h1>
      <a href="/docs">Back to documentation index</a>
    </header>

    <article class="doc-content">
      <pre>{document.content}</pre>
    </article>
  {:else}
    <div class="empty-state">
      <h1>Document Not Found</h1>
      <p>The requested documentation page does not exist yet.</p>
      <a href="/docs">Return to the documentation index</a>
    </div>
  {/if}
</section>

<style>
  .doc-view-page {
    padding: 2rem 1.25rem 3rem;
    color: #1f2937;
  }

  .doc-header {
    margin-bottom: 1rem;
  }

  .eyebrow {
    margin: 0 0 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.8rem;
    color: #7ad7ff;
  }

  h1 {
    margin: 0 0 0.5rem;
    font-size: clamp(1.8rem, 3vw, 2.4rem);
  }

  a {
    color: #7ad7ff;
    text-decoration: none;
  }

  .doc-content {
    padding: 1rem 1.1rem;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  pre {
    white-space: pre-wrap;
    word-break: break-word;
    margin: 0;
    line-height: 1.7;
    font-family: ui-monospace, SFMono-Regular, monospace;
  }

  .empty-state {
    padding: 1.1rem;
    border-radius: 1rem;
    background: #ffffff;
    border: 1px solid #e5e7eb;
  }
</style>
