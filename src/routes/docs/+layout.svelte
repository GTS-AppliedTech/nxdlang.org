<script lang="ts">
  import DocSidebar from '$lib/components/DocSidebar.svelte';
  let { children } = $props();
</script>

<div class="docs-layout">
  <aside class="docs-sidebar">
    <DocSidebar />
  </aside>
  <main class="docs-main">
    {@render children()}
  </main>
</div>

<style>
  .docs-layout {
    display: grid;
    grid-template-columns: minmax(220px, 280px) 1fr;
    gap: 1.25rem;
    min-height: 100%;
    background: #13293b;
    padding: 1.25rem;
  }

  .docs-sidebar {
    border-right: 1px solid rgba(255, 255, 255, 0.12);
    padding-right: 1rem;
  }

  .docs-main {
    min-width: 0;
  }

  @media (max-width: 860px) {
    .docs-layout {
      grid-template-columns: 1fr;
    }

    .docs-sidebar {
      border-right: 0;
      padding-right: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      padding-bottom: 1rem;
    }
  }
</style>
