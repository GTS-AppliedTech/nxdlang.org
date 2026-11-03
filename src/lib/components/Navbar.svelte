<script lang="ts">
	let menuOpen = $state(false);

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/whats_new', label: 'Whats New'},
		{ href: '/roadmap', label: 'Roadmap'},
		{ href: '/docs', label: 'Documentation' },
		{ href: '/compiler', label: 'Compiler' },
		{ href: '/playground', label: 'Playground' },
		{href: '/faqs', label: 'FAQs'},
		{ href: '/contact', label: 'Contact Us' }
	];

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<nav class="site-nav" aria-label="Primary navigation">
	<div class="nav-body">
		<a href="/">
			<img src="/favicon.ico" alt="NXD Logo" class="brand-logo"><span class="brand">NXD</span>
		</a>
		<button
			class="menu-toggle"
			type="button"
			aria-expanded={menuOpen}
			aria-controls="primary-navigation"
			onclick={toggleMenu}
		>
			<span class="sr-only">Toggle navigation menu</span>
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</button>

		<ul class="nav-items desktop">
			{#each links as link}
				<li><a href={link.href}>{link.label}</a></li>
			{/each}
		</ul>
	</div>

	<div class="mobile-menu-wrapper">
		<div class="mobile-menu" class:open={menuOpen} id="primary-navigation" aria-hidden={!menuOpen}>
			<ul>
				{#each links as link}
					<li>
						<a href={link.href} onclick={closeMenu}>{link.label}</a>
					</li>
				{/each}
			</ul>

			<div class="social-cards mobile-menu-socials">
				<div class="social-card github-card">
					<p class="social-type">GitHub</p>
					<a href="https://github.com/GTS-AppliedTech/nxd_language" target="_blank" rel="noopener">github.com/GTS-AppliedTech/nxd_language</a>
				</div>
				<div class="social-card x-card">
					<p class="social-type">X</p>
					<a href="https://x.com/NXDLanguage" target="_blank" rel="noopener">@NXDLanguage</a>
				</div>
			</div>
		</div>
		{#if menuOpen}
			<button class="menu-backdrop" type="button" onclick={closeMenu} aria-hidden="true"></button>
		{/if}
	</div>
</nav>

<style>
	.site-nav {
		position: relative;
		z-index: 50;
		background: #07111f;
		border-bottom: 1px solid #0f172a;
		color: #dce7f5;
	}

	.nav-body {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem 1.25rem;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		font-weight: 700;
		text-decoration: none;
		color: #1c97cc;
		font-size: 1.4rem;
	}

.brand-logo {
    width: 48px;
    height: 48px;
    object-fit: contain;
}	

	.menu-toggle {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 2.75rem;
		height: 2.75rem;
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 0.85rem;
		background: transparent;
		color: inherit;
		cursor: pointer;
	}

	.menu-toggle:hover,
	.menu-toggle:focus-visible {
		outline: none;
		border-color: #7ad7ff;
	}

	.bar {
		display: block;
		width: 1.25rem;
		height: 0.16rem;
		background: currentColor;
		border-radius: 999px;
		margin: 0.22rem 0;
	}

	.nav-items.desktop {
		display: none;
		list-style: none;
		margin: 0;
		padding: 0;
		align-items: center;
		gap: 1rem;
	}

	.nav-items.desktop li {
		display: inline;
	}

	.nav-items.desktop a,
	.mobile-menu  a{
		display: inline-flex;
		align-items: center;
		padding: 0.8rem 1rem;
		border-radius: 0.85rem;
		text-decoration: none;
		color: #1c97cc;
		font-weight: 600;
	}

	.nav-items.desktop a:hover,
	.mobile-menu a:hover {
		background: rgba(122, 215, 255, 0.14);
		color: #7ad7ff;
	}

	.mobile-menu-wrapper {
		position: relative;
	}

	.mobile-menu {
		position: absolute;
		z-index:  100;
		top: 100%;
		left: 0;
		right: 0;
		background: #07111f;
		border-top: 1px solid #0f172a;
		padding: 1rem 1.25rem;
		display: none;
		flex-direction: column;
		gap: 0.5rem;
	}

	.mobile-menu.open {
		display: flex;
	}

	.mobile-menu ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.5rem;
	}

	.mobile-menu li {
		margin: 0;
	}

	.mobile-menu-socials {
		margin-top: 1rem;
		display: grid;
		gap: 0.75rem;
	}

	.social-cards {
		display: grid;
		gap: 0.75rem;
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
		color: #7ad7ff;
	}

	.social-card a {
		display: inline-block;
		color: #dce7f5;
		text-decoration: none;
		word-break: break-word;
	}

	.social-card a:hover {
		color: #7ad7ff;
	}

	.menu-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(7, 17, 31, 0.72);
		border: none;
		padding: 0;
		margin: 0;
		cursor: default;
		z-index: 10;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	@media (min-width: 860px) {
		.menu-toggle {
			display: flex;
		}

		.nav-items.desktop {
			display: none;
		}
	}
</style>
