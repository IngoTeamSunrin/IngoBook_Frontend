<script context="module">
	export async function load({ session }) {
		return {
			status: 301,
			redirect: `/home`,
			props: { user: session }
		};
	}
</script>
