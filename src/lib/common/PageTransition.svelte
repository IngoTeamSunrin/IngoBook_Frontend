<script lang="ts">
	import { fly } from 'svelte/transition';
	export let refresh;
</script>

{#key refresh}
	<main>
		<div
			class="section"
			in:fly={{ x: -10, duration: 500, delay: 500 }}
			out:fly={{ x: 10, duration: 500 }}
		>
			<slot />
		</div>
	</main>
{/key}

<style lang="scss">
	main {
		width: 100%;
		height: auto;
		background: var(--background-color);
		transition: background 0.3s ease-in-out;
	}
	.section {
		top: 80px;
		position: relative;
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 180px;

		transition: background 0.3s ease-in-out;
	}
</style>
