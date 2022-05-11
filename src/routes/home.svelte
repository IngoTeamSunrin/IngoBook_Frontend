<script lang="ts">
	import type { IBook } from '$lib/interfaces';
	import Book from '../components/home/Book.svelte';
	import { onMount } from 'svelte';
	import BookList from '../components/home/BookList.svelte';
	import AppBarTitle from '../components/home/AppBarTitle.svelte';
	import AnnounceBar from '../components/home/AnnounceBar.svelte';

	const bookmark: IBook[] = [
		{
			id: 1,
			book_name: '1학년 국어',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		},
		{
			id: 2,
			book_name: '1학년 국어',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		},
		{
			id: 3,
			book_name: '1학년 국어',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		},
		{
			id: 1,
			book_name: '1학년 국어',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		},
		{
			id: 2,
			book_name: '1학년 국어',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		},
		{
			id: 3,
			book_name: '1학년 국어',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		}
	];

	const myBooks: IBook[] = [
		{
			id: 1,
			book_name: '2학년 수학',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		},
		{
			id: 1,
			book_name: '2학년 수학',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		},
		{
			id: 1,
			book_name: '2학년 수학',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		},
		{
			id: 1,
			book_name: '2학년 수학',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		},
		{
			id: 1,
			book_name: '2학년 수학',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		},
		{
			id: 1,
			book_name: '2학년 수학',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		},
		{
			id: 1,
			book_name: '2학년 수학',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		},
		{
			id: 1,
			book_name: '2학년 수학',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		},
		{
			id: 1,
			book_name: '2학년 수학',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		},
		{
			id: 1,
			book_name: '2학년 수학',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		},
		{
			id: 1,
			book_name: '2학년 수학',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		},
		{
			id: 1,
			book_name: '2학년 수학',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		},
		{
			id: 1,
			book_name: '2학년 수학',
			book_thumbnail: 'images/textbook.jpeg',
			book_url: '/book/2343472940'
		}
	];
</script>

<AppBarTitle />
<AnnounceBar />
<div class="w-[73.125rem] relative flex flex-col items-center h-auto">
	<div class="flex relative mt-20 justify-between items-start w-full">
		<div class="w-[565px] flex flex-col items-center">
			<div class="w-[528px] flex justify-between items-center">
				<div class="text-2xl font-semibold text-ingobook-brown-300">내 책 찾기</div>
				<div class="see_all_content">
					크게 보기
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
						<path
							id="패스_491"
							data-name="패스 491"
							d="M12,4,10.59,5.41,16.17,11H4v2H16.17l-5.58,5.59L12,20l8-8Z"
							transform="translate(-4 -4)"
							fill="#7f6868"
						/>
					</svg>
				</div>
			</div>
			<div class="main_wrap">
				<BookList title="북마크" books={bookmark} pagination={false} />
				<hr class="box_line" />
				<BookList title="내 책 목록" books={myBooks} pagination={true} />
			</div>
		</div>
		<div class="top_wrap">
			<div class="title">
				학년별 찾기
				<div class="underline" />
			</div>
			<div class="see_all_content">
				크게 보기
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
					<path
						id="패스_491"
						data-name="패스 491"
						d="M12,4,10.59,5.41,16.17,11H4v2H16.17l-5.58,5.59L12,20l8-8Z"
						transform="translate(-4 -4)"
						fill="#7f6868"
					/>
				</svg>
			</div>
		</div>
		<div class="main_wrap">
			<div class="selection">
				<div class="title">학년 선택</div>
				<ul class="options">
					<button class="option_filter selected">1학년</button>
					<button class="option_filter">2학년</button>
					<button class="option_filter">3학년</button>
				</ul>
			</div>
			<div class="selection">
				<div class="title">학과 선택</div>
				<ul class="options">
					<button class="option_filter selected">소프트웨어과</button>
					<button class="option_filter">정보보호과</button>
					<button class="option_filter">IT경영과</button>
					<button class="option_filter">콘텐츠디자인과</button>
				</ul>
			</div>
			<hr class="box_line" />

			<BookList books={myBooks} pagination={true} />
		</div>
	</div>
</div>

<style lang="scss">
	.body_wrap {
		position: relative;
		width: 1553px;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		.body_wrap_vertical {
			display: flex;
			position: relative;
			flex-direction: row;
			margin-top: 72px;
			justify-content: space-between;
			align-items: start;
			width: 100%;
			.see_my_book {
				width: 744px;
				display: flex;
				flex-direction: column;
				align-items: center;
				.top_wrap {
					width: 713px;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					.title {
						font-size: 32px;
						font-weight: 600;
						color: var(--title-text-color);
						box-shadow: inset 0 -10px 0 var(--text-border-color);
						transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
					}
					.see_all_content {
						color: #7f6868;
						font-size: 22px;

						svg {
							margin-left: 12px;
						}
					}
				}
				.main_wrap {
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 680px;
					padding: 44px 32px;
					border: 1px solid var(--box-border-color);
					transition: background 0.3s ease-in-out, border 0.3s ease-in-out, height 0.3s ease-in-out;
					background: var(--box-color);
					margin-top: 45px;
					border-radius: 16px;
					.box_line {
						border: none;
						border-top: 1px solid var(--selection-button-border-color);
						transition: border 0.3s ease-in-out;
						width: 100%;
						margin-top: 35px;
						margin-bottom: 44px;
					}
					.selection {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: start;
						.title {
							margin-left: 16px;
							color: var(--title-text-color);
							transition: color 0.3s ease-in-out;
							font-size: 28px;
							font-weight: 600;
							width: 680px;
						}
						.options {
							display: flex;
							width: 100%;
							padding-left: 0;
							margin-top: 25px;
							margin-bottom: 50px;
							margin-left: 5px;
							flex-direction: row;
							align-items: center;
							flex-wrap: wrap;
							.option_filter {
								font-family: Pretendard, serif;
								color: var(--selection-button-text-color);
								padding: 14px 40px;
								border: 2px solid var(--selection-button-border-color);
								border-radius: 28px;
								font-size: 22px;
								display: flex;
								flex-direction: column;
								align-items: center;
								justify-content: center;
								background: var(--selection-button-color);
								transition: background 0.3s ease-in-out, border 0.3s ease-in-out,
									color 0.3s ease-in-out;
								margin-left: 16px;
								&.selected {
									background: var(--selection-button-selected-color);
									border: 2px solid var(--selection-button-selected-border-color);
									color: var(--selection-button-selected-text-color);
									transition: background 0.3s ease-in-out, border 0.3s ease-in-out,
										color 0.3s ease-in-out;
								}
								&:nth-child(4) {
									margin-top: 10px;
									margin-left: 0;
								}
								&:first-child {
									margin-left: 0;
								}
							}
						}
					}
				}
			}
		}
	}
	@media only screen and (max-width: 1024px) {
		.start {
			font-size: 10px;
		}
	}
	@media (max-width: 768px) {
	}
	@media (max-width: 480px) {
	}
</style>
