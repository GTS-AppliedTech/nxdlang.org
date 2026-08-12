<script>
  import DocsDropdownTree from '$lib/components/DocsDropdownTree.svelte';

 
  /** @type {Record<string, string>} */
  const docModules = import.meta.glob('./**/*.{md,txt}', { eager: true, query: '?raw', import: 'default'});

  /** @type {Record<string, string>} */
  const sectionLabels = {
    v1: 'Version 1',
    compiler: 'Compiler',
    backend: 'Backend',
    runtime: 'Runtime',
    security: 'Security',
    'language-guide': 'Language Guide',
    ecosystem: 'Ecosystem',
    appendix: 'Appendix',
    golden_examples: 'Golden Examples',
    tiny_examples: 'Tiny Examples',
    medium_examples: 'Medium Examples',
    large_examples: 'Large Examples',
    xlarge_examples: 'XLarge Examples',
    referance_archetecture: 'Reference Architecture'
  };

  /** @type {Record<string, string>} */
  const sectionDescriptions = {
    compiler: 'Compiler frontend, IR, lowering, and architecture guidance.',
    backend: 'Backend mapping and target-specific code generation notes.',
    runtime: 'Runtime semantics, execution flow, and concurrency model.',
    security: 'Security invariants, propagation, and safety claims.',
    'language-guide': 'Language syntax, typing, grammar, and semantics.',
    ecosystem: 'Package management, standard library, and build system notes.',
    appendix: 'Reference appendices, cookbooks, and examples.',
    golden_examples: 'Reference examples organized by size and complexity.',
    tiny_examples: 'Compact examples that highlight small language patterns.',
    medium_examples: 'Mid-sized examples that demonstrate common constructs.',
    large_examples: 'Larger examples that exercise more of the language.',
    xlarge_examples: 'Very large examples for architecture and scale testing.',
    referance_archetecture: 'Reference architecture snapshots and design notes.'
  };

  /** @type {Record<string, string>} */
  const anchorOverrides = {
    'v1/compiler/ARCHITECTURE.md': 'docs',
    'v1/compiler/IR_LOWERING.md': 'docs',
    'v1/backend/NXD-NIM_MAPPING.md': 'docs',
    'v1/backend/NXD-ELIXER_MAPPING.md': 'docs',
    'v1/backend/NXD-D_MAPPING.md': 'docs',
    'v1/appendix/COOKBOOK_APNDX.md': 'docs',
    'v1/language-guide': 'docs',
    'v1/appendix/golden_examples': 'docs'
  };

  /** @type {Record<string, string>} */
  const routeOverrides = {
    'v1/VISION.md': '/docs/v1/vision',
    'v1/CONTRIBUTING.md': '/docs/v1/contributing',
    'v1/LICENSE.txt': '/docs/v1/license',
    'v1/appendix/COOKBOOK_APNDX.md': '/docs/v1/appendix/cookbook-apndx'
  };

  /**
   * @param {string} filePath
   * @param {string} fileName
   */
  function titleFromFile(filePath, fileName) {
    const content = /** @type {string | undefined} */ (docModules[filePath]);
    const headingMatch = content?.match(/^#\s+(.+)$/m);
    if (headingMatch) return headingMatch[1].trim();

    const cleanName = fileName.replace(/\.(md|txt)$/i, '').replace(/[-_]/g, ' ');
    return cleanName.replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  /**
   * @param {string} filePath
   * @param {string} fileName
   */
  function describeDocument(filePath, fileName) {
    const lower = filePath.toLowerCase();
    const base = fileName.toLowerCase();

    if (lower.includes('vision')) return 'High-level language vision, project goals, and platform direction.';
    if (base.includes('architecture')) return 'Architecture overview and design context for the compiler or runtime.';
    if (base.includes('ir')) return 'Intermediate representation and lowering rules.';
    if (base.includes('lower')) return 'Lowering strategy and transformation details.';
    if (base.includes('lexical')) return 'Lexical grammar and tokenization rules.';
    if (base.includes('mapping')) return 'Target backend mapping and implementation notes.';
    if (base.includes('philosophy')) return 'Mapping philosophy and target-specific rationale.';
    if (base.includes('concurrency')) return 'Concurrency and scheduling semantics.';
    if (base.includes('execution')) return 'Runtime execution flow and semantics.';
    if (base.includes('channel')) return 'Channel semantics and communication behavior.';
    if (base.includes('runtime')) return 'Runtime architecture and execution model details.';
    if (base.includes('security')) return 'Security invariants and safety guarantees.';
    if (base.includes('invariant')) return 'Safety invariant descriptions and validation notes.';
    if (base.includes('error')) return 'Error handling and failure-mode documentation.';
    if (base.includes('type')) return 'Typing, casting, and type-system rules.';
    if (base.includes('grammar')) return 'Grammar structure and language syntax details.';
    if (base.includes('generic')) return 'Generic constraints and instantiation rules.';
    if (base.includes('equality')) return 'Equality and mutation semantics.';
    if (base.includes('contribut')) return 'Contribution workflow, governance, and development guidance.';
    if (base.includes('license')) return 'Project licensing and distribution terms.';
    if (base.includes('cookbook')) return 'Cookbook-style reference material and practical examples.';
    if (base.includes('standard')) return 'Standard library and language runtime support details.';
    if (base.includes('build')) return 'Build system requirements and packaging guidance.';
    if (base.includes('package')) return 'Module and package management specifications.';
    if (base.includes('example')) return 'Reference example demonstrating a language feature or pattern.';
    if (base.includes('ref_arch')) return 'Reference architecture snapshot used for design comparison.';

    return 'Technical reference material for the surrounding subsystem.';
  }

  /**
   * @param {string} value
   */
  function slugify(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  /**
   * @param {string} segment
   */
  function humanize(segment) {
    const label = sectionLabels[segment] || segment.replace(/[-_]/g, ' ');
    return label.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  function buildTree() {
    /** @type {{ children: Record<string, any>, files: any[] }} */
    const root = { children: {}, files: [] };

    Object.entries(docModules).forEach(([modulePath]) => {
      const cleanPath = modulePath.replace(/^\.\//, '').replace(/\\/g, '/');
      const segments = cleanPath.split('/');
      const fileName = segments.pop();
      const parts = segments;
      const normalizedPath = cleanPath.replace(/\.(md|txt)$/i, '');
      const relativeRoute = normalizedPath
        .split('/')
        .filter(Boolean)
        .map((segment) => slugify(segment))
        .join('/');
      const route = routeOverrides[cleanPath] || (relativeRoute ? `/docs/${relativeRoute}` : '/docs');

      /** @type {{ children: Record<string, any>, files: any[] }} */
      let current = root;
      parts.forEach((segment) => {
        if (!current.children[segment]) {
          current.children[segment] = {
            name: segment,
            title: humanize(segment),
            description: sectionDescriptions[segment] || '',
            children: {},
            files: []
          };
        }
        current = current.children[segment];
      });

      current.files.push({
        path: cleanPath,
        fileName,
        title: titleFromFile(cleanPath, fileName || ''),
        description: describeDocument(cleanPath, fileName || ''),
        anchor: anchorOverrides[cleanPath] || anchorOverrides[cleanPath.replace(/\/(?:[^/]+)$/,'')] || slugify(titleFromFile(cleanPath, fileName || '')),
        url: route
      });
    });

    return root;
  }

 const docTree = buildTree();

 const versionRoot = docTree.children.v1;

 const topLevelSections = versionRoot
   ? [
       {
         name: 'core-documents',
         title: 'Core Documents',
         description:
           'Project vision, licensing, contribution guidance and top-level documents.',
         children: {},
         files: versionRoot.files
       },
       ...Object.values(versionRoot.children)
     ]
   : Object.values(docTree.children); 
</script>

<svelte:head>
  <title>Documentation Index</title>
  <meta name="description" content="An index of the available NXD documentation files and sections." />
</svelte:head>

<section class="docs-index-page">
  <header class="intro">
    <p class="eyebrow">Documentation Index</p>
    <h1>Documentation Index</h1>
    <p class="lead">
      Browse the available NXD reference documentation by section and sub-section. The index below covers the current documentation set under the docs tree.
    </p>
  </header>

  <div class="summary-card">
    <p><strong>Coverage:</strong> {Object.values(docModules).length} documents indexed across the available documentation sections.</p>
    <p>Sections below include compiler notes, backend mappings, runtime semantics, security specifications, language guidance, ecosystem guidance, and appendix examples.</p>
  </div>

  <div class="section-list">
  <DocsDropdownTree nodes={topLevelSections} />
  </div>

  <div class="social-cards docs-social-cards">
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

<style>
  .docs-index-page {
    padding: 2rem 1.25rem 3rem;
    min-height: 100vh;
    background: #13293b;
    color: #f5f7fb;
  }

  .intro {
    max-width: 760px;
    margin-bottom: 1.25rem;
  }

  .eyebrow {
    margin: 0 0 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.8rem;
    color: #62a6f3;
  }

  h1 {
    margin: 0 0 0.75rem;
    font-size: clamp(2rem, 3vw, 2.6rem);
  }

  .lead {
    line-height: 1.7;
    color: #f5f7fb;
  }

  .summary-card,
  .section-card,
  .subsection,
  .doc-card {
    background: #13293b;
    border: 1px solid #334155;
    border-radius: 1rem;
    padding: 1.1rem 1.2rem;
    margin-bottom: 1rem;
  }

  .section-header h2,
  .subsection h3,
  .subsection h4,
  .doc-card h3 {
    margin: 0 0 0.45rem;
  }

  .section-header p,
  .subsection p,
  .doc-card p {
    margin: 0;
    line-height: 1.65;
    color: #f5f7fb;
  }

  .doc-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0;
    display: grid;
    gap: 0.75rem;
  }

  .doc-card {
    padding: 0;
  }

  .doc-link {
    display: block;
    padding: 0.9rem 1rem;
    color: #62a6f3;
    text-decoration: none;
  }

  .doc-link:hover,
  .docs-index-page a:hover {
    color: #62a6f3;
  }

  .nested {
    margin-top: 0.75rem;
  }

  .subsection-children {
    margin-top: 0.75rem;
    padding-left: 0.75rem;
    border-left: 1px solid #334155;
  }

  .social-cards {
    display: grid;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }

  .docs-social-cards {
    max-width: 760px;
    margin: 0 auto;
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
</style>
