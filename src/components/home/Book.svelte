<script lang="ts">
	export let book;
	import { fly } from 'svelte/transition';
</script>

<div class="book_wrap">
	<a href={book.book_url}>
		<img src={book.book_thumbnail} alt="책 이미지" />
		<div class="book_name">{book.book_name}</div>
	</a>
</div>

<style lang="scss">
	.book_wrap {
		a {
			margin-top: 32px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			text-decoration: none;
			img {
				width: 192px;
				height: auto;
				border: 2px solid #569ed8;
				border-radius: 8px;
			}
			.book_name {
				color: var(--title-text-color);
				font-size: 22px;
				margin-top: 27px;
			}
		}
	}
</style>
