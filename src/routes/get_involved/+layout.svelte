<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<Navbar />
{@render children()}
