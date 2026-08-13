<script lang="ts">
	type DocFile = {
		path: string;
		fileName: string;
		title: string;
		description: string;
		anchor: string;
		url: string;
	};

	type DocNode = {
		name: string;
		title: string;
		description?: string;
		children: Record<string, DocNode>;
		files: DocFile[];
	};

	let { nodes = [], level = 2 } = $props<{
		nodes: DocNode[];
		level?: number;
	}>();

	function sortedChildren(node: DocNode) {
		return Object.values(node.children).sort((a, b) => a.title.localeCompare(b.title));
	}

	function hasChildren(node: DocNode) {
		return Object.keys(node.children).length > 0;
	}

	function shouldOpen(level: number) {
		return level <= 2;
	}
</script>

<div class="dropdown-tree level-{level}">
	{#each nodes as node}
		<details 
          class="tree-section" 
          open={shouldOpen(level)}
          id={
            node.name === 'golden_examples'
            ? 'examples'
            : undefined
          }
        >
			<summary>
				<span class="section-title">{node.title}</span>
				<span class="section-count">
					{node.files.length + sortedChildren(node).reduce((total, child) => total + child.files.length, 0)}
				</span>
			</summary>

			{#if node.description}
				<p class="section-description">{node.description}</p>
			{/if}

			{#if node.files.length}
				<ul class="doc-list">
					{#each node.files as doc}
						<li id={doc.anchor} class="doc-card">
                            <a href={doc.url}>
							   <h3>{doc.title}</h3>
							   <p>{doc.description}</p>
                            </a>
                        </li>						
					{/each}
				</ul>
			{/if}

			{#if hasChildren(node)}
				<svelte:self nodes={sortedChildren(node)} level={level + 1} />
			{/if}
		</details>
	{/each}
</div>

<style>
	.dropdown-tree {
		display: grid;
		gap: 0.85rem;
	}

	.tree-section {
		background: #13293b;
		border: 1px solid #334155;
		border-radius: 1rem;
		padding: 0.75rem 0.9rem;
	}

	.tree-section summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		cursor: pointer;
		color: #f5f7fb;
		font-weight: 700;
		list-style: none;
	}

	.tree-section summary::-webkit-details-marker {
		display: none;
	}

	.tree-section summary::before {
		content: '›';
		display: inline-block;
		margin-right: 0.5rem;
		color: #62a6f3;
		transform: rotate(0deg);
		transition: transform 0.15s ease;
	}

	.tree-section[open] > summary::before {
		transform: rotate(90deg);
	}

	.section-title {
		flex: 1;
	}

	.section-count {
		min-width: 2rem;
		text-align: center;
		border-radius: 999px;
		padding: 0.2rem 0.55rem;
		font-size: 0.75rem;
		background: rgba(98, 166, 243, 0.16);
		color: #7ad7ff;
	}

	.section-description {
		margin: 0.75rem 0 0;
		line-height: 1.6;
		color: #f5f7fb;
	}

	.doc-list {
		list-style: none;
		padding: 0;
		margin: 0.85rem 0 0;
		display: grid;
		gap: 0.65rem;
	}

	.doc-card {
		margin: 0;
		padding: 0;
		border-radius: 0.85rem;
		border: 1px solid #334155;
		background: rgba(255, 255, 255, 0.03);
	}

	.doc-link {
		display: block;
		padding: 0.85rem 1rem;
		color: #6d28d9;
		text-decoration: none;
	}

	.doc-link:hover {
		color: #7ad7ff;
		background: rgba(122, 215, 255, 0.08);
	}

	.doc-link h3 {
		margin: 0 0 0.35rem;
		font-size: 1rem;
	}

	.doc-link p {
		margin: 0;
		line-height: 1.55;
		color: #6d28d9;
	}

	.level-3,
	.level-4,
	.level-5 {
		margin-top: 0.75rem;
		padding-left: 0.75rem;
		border-left: 1px solid #334155;
	}

	@media (max-width: 700px) {
		.tree-section {
			padding: 0.7rem;
		}

		.level-3,
		.level-4,
		.level-5 {
			padding-left: 0.5rem;
		}
	}
</style>