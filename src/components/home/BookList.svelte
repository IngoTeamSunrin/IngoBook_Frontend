<script lang="ts">
	import type { IBook } from '$lib/interfaces';
	import Book from './Book.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let title;
	export let books;
	export let pagination;

	const cropBookArray = (bookArr) => {
		if (bookArr.length < 6) return bookArr;
		let response = [];
		let countFirst = Math.floor(bookArr.length / 6);
		let pos = 0;
		for (let i = 0; i < countFirst; i++) {
			let arrl = [];
			for (let j = 0; j < 6; j++) {
				arrl = [...arrl, bookArr[pos]];
				pos += 1;
			}
			response = [...response, arrl];
		}
		if (bookArr.length % 6 != 0) {
			let countLast = bookArr.length % 6;
			let temp = [];
			for (let j = 0; j < countLast; j++) {
				temp = [...temp, bookArr[pos]];
				pos += 1;
			}
			response = [...response, temp];
		}
		return response;
	};

	let currentPos = 0;

	let resultArray = cropBookArray(books);
</script>

<div class="book_list">
	{#if title !== undefined}
		<div class="title">{title}</div>
	{/if}
	<div class="book_list_grid">
		{#each resultArray[currentPos] as book}
			<Book {book} />
		{/each}
	</div>
</div>
{#if pagination}
	<div class="pagination">
		<svg
			id="chevron_right_black_24dp"
			xmlns="http://www.w3.org/2000/svg"
			width="28"
			height="28"
			viewBox="0 0 28 28"
		>
			<path id="패스_492" data-name="패스 492" d="M28,0H0V28H28Z" fill="none" />
			<path
				id="패스_493"
				data-name="패스 493"
				d="M15.59,6l1.645,1.645L11.892,13l5.343,5.355L15.59,20l-7-7Z"
				transform="translate(0.743 1)"
				fill="#d8bcbc"
			/>
		</svg>
		{#each Array(resultArray.length) as _, i}
			<div class="page_number" class:selected={currentPos === i} on:click={() => (currentPos = i)}>
				{i + 1}
			</div>
		{/each}
		<svg
			id="chevron_right_black_24dp"
			xmlns="http://www.w3.org/2000/svg"
			width="28"
			height="28"
			viewBox="0 0 28 28"
		>
			<path
				id="패스_493"
				data-name="패스 493"
				d="M10.235,6,8.59,7.645,13.933,13,8.59,18.355,10.235,20l7-7Z"
				transform="translate(1.432 1)"
				fill="#d8bcbc"
			/>
		</svg>
	</div>
{/if}

<style lang="scss">
	.book_list {
		margin-bottom: 20px;
		width: 680px;
		.title {
			margin-left: 16px;
			color: var(--title-text-color);
			font-size: 28px;
			font-weight: 500;
			width: 680px;
		}
		.book_list_grid {
			position: relative;
			margin-right: 0;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 4px;
		}
	}
	.pagination {
		margin-top: 50px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 29px;
		font-size: 24px;
		color: #b29898;
		.page_number {
			margin-left: 22px;
			margin-right: 22px;
			&.selected {
				color: #ff7070;
			}
			&:hover {
				cursor: pointer;
			}
		}
	}
</style>
