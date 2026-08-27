<script>
  import DocsDropdownTree from '$lib/components/DocsDropdownTree.svelte';

  /*
   * This is the single source folder for the test index.
   *
   * +page.svelte is in:
   * src/routes/test_index/
   *
   * The test documents are in:
   * src/routes/docs/v1/all_tests/
   */
  const testModules = import.meta.glob(
    '../docs/v1/all_tests/**/*.{md,txt}',
    {
      eager: true,
      query: '?raw',
      import: 'default'
    }
  );

  /**
   * Convert a physical folder or filename into the URL format already
   * used by the main Documentation Index.
   *
   * @param {string} value
   */
  function slugify(value) {
    return value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  /**
   * Convert folder and filenames into readable labels.
   *
   * @param {string} value
   */
  function humanize(value) {
    return value
      .replace(/\.(md|txt)$/i, '')
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (character) => character.toUpperCase());
  }

  /**
   * Use the first Markdown heading as the document title.
   * If no heading exists, use the filename.
   *
   * @param {string} modulePath
   * @param {string} fileName
   */
  function titleFromFile(modulePath, fileName) {
    const content = testModules[modulePath];
    const headingMatch =
      typeof content === 'string'
        ? content.match(/^#\s+(.+)$/m)
        : null;

    if (headingMatch) {
      return headingMatch[1].trim();
    }

    return humanize(fileName);
  }

  /**
   * Build the test-only folder and document tree.
   */
  /**
 * @typedef {Object} TestDocFile
 * @property {string} path
 * @property {string} fileName
 * @property {string} title
 * @property {string} description
 * @property {string} anchor
 * @property {string} url
 */

/**
 * @typedef {Object} TestDocNode
 * @property {string} name
 * @property {string} title
 * @property {string} description
 * @property {Record<string, TestDocNode>} children
 * @property {TestDocFile[]} files
 */
 function buildTestTree() {
    /** @type {TestDocNode}*/
    const root = {
      name: '',
      title: '',
      description: '',
      children: {},
      files: []
    };

    Object.entries(testModules).forEach(([modulePath]) => {
      /*
       * Example incoming modulePath:
       *
       * ../docs/v1/all_tests/
       * tests_nim_compiler-passed/
       * expected_to_pass/
       * PT001.md
       */

      const relativePath = modulePath
        .replace(/\\/g, '/')
        .replace(/^.*\/all_tests\//, '');

      const segments = relativePath.split('/');
      const fileName = segments.pop();

      if (!fileName) {
        return;
      }

      /** @type {TestDocNode} */
      let current = root;

      /*
       * Every folder becomes a child node.
       * DocsDropdownTree recursively renders these nodes.
       */
      segments.forEach((segment) => {
        if (!current.children[segment]) {
          current.children[segment] = {
            name: segment,
            title: humanize(segment),
            description: '',
            children: {},
            files: []
          };
        }

        current = current.children[segment];
      });

      /*
       * Build the same route format as the main docs index:
       * lowercase, no file extension, and slugified URL segments.
       */
      const documentPath = relativePath.replace(/\.(md|txt)$/i, '');

      const documentRoute = documentPath
        .split('/')
        .filter(Boolean)
        .map((segment) => slugify(segment))
        .join('/');

      const title = titleFromFile(modulePath, fileName);

      current.files.push({
        path: `v1/all_tests/${relativePath}`,
        fileName,
        title,
        description: 'NXD compiler validation test documentation.',
        anchor: slugify(title),
        url: `/docs/v1/all-tests/${documentRoute}`
      });
    });

    return root;
  }

  const testTree = buildTestTree();

  /*
   * These become the two top-level dropdown sections:
   *
   * Nim Compiler Passed Tests
   * Nim Compiler Failed Tests
   */
  const testSections = Object.values(testTree.children);
</script>
<svelte:head>
  <title>NXD Test Results</title>
  <meta
    name="description"
    content="Browse the published NXD compiler validation test results."
  />
</svelte:head>

<section class="test-index-page">
  <header class="intro">
    <p class="eyebrow">Validation Documentation</p>
    <h1>NXD Test Results</h1>
    <p class="lead">
      Browse the published NXD compiler test documentation by validation
      category.
    </p>
  </header>

  <DocsDropdownTree nodes={testSections} />
</section>
<style>
.test-index-page {
  min-height: 100vh;
  padding: 2rem 1.25rem 3rem;
  background: linear-gradient(
    135deg,
    #07111f 0%,
    #13253e 100%
  );
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

.lead {
  line-height: 1.7;
  color: #dce7f5;
}

h1 {
  color: #f5f7fb;
}
</style>