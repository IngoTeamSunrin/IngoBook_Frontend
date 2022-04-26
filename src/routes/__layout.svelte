<script lang="ts">
	import '/src/app.css';
	import Header from '$lib/common/Header.svelte';
	import Footer from '$lib/common/Footer.svelte';
	import PageTransition from '$lib/common/PageTransition.svelte';
	export let key;
</script>

<Header />

<PageTransition refresh={key}>
	<slot />
</PageTransition>

<Footer />

<style lang="scss">
	slot {
		z-index: 9999;
		top: 0;
		width: 100%;
		min-height: 100vh;
	}
</style>
