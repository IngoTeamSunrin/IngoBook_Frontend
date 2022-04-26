<div class="app_bar_title">
	<div class="wrap">
		<div class="start">
			<div class="title">
				이제 여기저기서 교과서 PDF를
				<div class="bold">찾아다닐 필요가 없어요</div>
				<div class="underline" />
			</div>
			<div class="subtitle">IngoBook에서 모든 교과서와 프린트를 찾을 수 있기 때문이죠. 😉</div>
		</div>
		<div class="end" />
		<img src="images/banner_image.svg" alt="" />
	</div>
</div>

<style lang="scss">
	.app_bar_title {
		position: relative;
		background: var(--box-color);
		transition: background 0.3s ease-in-out, border-bottom 0.3s ease-in-out;
		width: 100%;
		margin: 0;
		padding-top: 56px;
		padding-bottom: 75px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid var(--announce-bar-border-color);
		.wrap {
			display: flex;
			flex-direction: row;
			width: 1553px;
			justify-content: space-between;
			.start {
				.title {
					color: var(--accent-text-color);
					transition: color 0.3s ease-in-out;
					font-size: 4em;
					font-weight: 500;
					line-height: 94px;
					.bold {
						position: relative;
						z-index: 500;
						font-weight: 700;
					}
					.underline {
						position: absolute;
						width: 616px;
						height: 24px;
						background: var(--text-border-color);
						transition: background 0.3s ease-in-out;
						top: 210px;
						z-index: 4;
					}
				}
				.subtitle {
					margin-top: 47px;
					font-size: 22px;
					color: var(--title-text-color);
					transition: color 0.3s ease-in-out;
					font-weight: 400;
				}
			}
			.end {
				svg {
					position: relative;
				}
			}
		}
	}
</style>
