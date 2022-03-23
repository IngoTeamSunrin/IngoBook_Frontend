<script lang="ts">
	import { page } from '$app/stores';
	let modal = false;

	const toggleModal = () => {
		modal = !modal;
	};
	import { get } from 'svelte/store';
	import { session } from '$app/stores';

	const user = 3;
</script>

<header>
	<div class="wrap">
		<div class="first">
			<a href="/">
				<img src="/images/logo.svg" alt="" class="logo" />
			</a>

			<ul>
				<li>
					<a sveltekit:prefetch href="/search" class:selected={$page.url.pathname === '/search'}>
						학년별 찾기
					</a>
				</li>
				<li>
					<a sveltekit:prefetch href="/list" class:selected={$page.url.pathname === '/list'}>
						교과서 목록
					</a>
				</li>
				<li>
					<a
						sveltekit:prefetch
						href="/info/service"
						class:selected={$page.url.pathname === '/info/service'}
					>
						서비스 소개
					</a>
				</li>
				<li>
					<a
						sveltekit:prefetch
						href="/info/team"
						class:selected={$page.url.pathname === '/info/team'}
					>
						팀 소개
					</a>
				</li>
			</ul>
		</div>
		<div class="end">
			<div class="dark_toggle">
				<span>다크모드</span>
				<div class="status">OFF</div>
			</div>
			<div class="profile_box">
				{#if user != null}
					<div class="profile_info">
						<div class="profile_image" on:click={toggleModal} on:fly={{ y: -25, duration: 1000 }}>
							{#if modal}
								<div class="modal">
									<ul>
										<li>다크 모드</li>
										<li>설정</li>
										<li>계정 설정</li>
									</ul>
								</div>
							{/if}
						</div>
						<div class="name">CHIDILights</div>
					</div>
				{:else}
					<div class="profile_info">
						<a sveltekit:prefetch href="/auth/login" class="lgnBtn">로그인</a>
					</div>
				{/if}
			</div>
		</div>
	</div>
</header>

<style lang="scss">
	.modal {
		position: absolute;
		display: flex;
		padding: 20px 16px 20px 16px;
		background: #fefafa;
		box-shadow: 0 4px 8px #0000000d;
		border: 1px solid #ffe3e3;
		border-radius: 16px;
		top: 68px;

		overflow: hidden;
	}
	header {
		left: 0;
		position: fixed;
		display: flex;
		flex-direction: row;
		align-items: center;
		z-index: 9999;
		justify-content: center;
		width: 100%;
		height: 80px;
		background: rgba(255, 248, 248, 0.75);
		backdrop-filter: blur(24px);
		-webkit-backdrop-filter: blur(24px);
		align-self: flex-start;
		.wrap {
			width: 1553px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.first {
				filter: blur(0) !important;
				-webkit-filter: blur(0) !important; /* Safari 6.0 - 9.0 */
				display: flex;
				flex-direction: row;
				align-items: center;

				a {
					width: 146px;
					height: 28px;

					.logo {
						width: 146px;
						height: 28px;
					}
				}

				ul {
					margin-left: 10px;
					display: flex;
					flex-direction: row;
					list-style: none;
					align-items: center;
					justify-content: space-between;
					width: 530px;

					li {
						a {
							text-decoration: none;

							font-size: 22px;
							color: #7f6868;
							word-break: keep-all;
							word-wrap: normal;

							&:visited {
								color: #453737;
							}

							&.selected {
								color: #453737;
								font-weight: 600;

								&:hover {
									color: #171212;
								}
							}

							&:hover {
								color: #453737;
							}
						}
					}
				}
			}

			.end {
				display: flex;
				flex-direction: row;
				align-items: center;
				width: auto;
				justify-content: space-between;

				.dark_toggle {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					margin-right: 44px;

					span {
						font-size: 22px;
						color: #5a4e4e;
						margin-right: 12px;
					}

					.status {
						font-size: 22px;
						color: #b29898;
					}
				}

				.profile_box {
					display: flex;
					flex-direction: row;
					align-items: center;

					img {
						padding-left: 22px;
						padding-right: 3px;
					}

					.profile_info {
						width: auto;
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: space-between;
						padding-left: 3px;
						padding-right: 3px;
						color: #8a8a8a;

						.lgnBtn {
							text-decoration: none;
						}

						.lgnBtn:visited {
						}

						.lgnBtn:hover {
						}

						.profile_image {
							background: url('/images/profile.svg');
							border: 1px solid #ffe3e3;
							border-radius: 50%;
							width: 32px;
							height: 32px;
							margin-right: 16px;

							&:hover {
								cursor: pointer;
							}
						}

						.name {
							font-size: 22px;
							color: #5a4e4e;
							font-weight: 500;
						}
					}
				}
			}
		}
	}
</style>
