<div class="announce_bar">
	<div class="wrap">
		<div class="announce_component">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path
					id="error_black_24dp"
					d="M14,2A12,12,0,1,0,26,14,12,12,0,0,0,14,2Zm1.2,18H12.8V17.6h2.4Zm0-4.8H12.8V8h2.4Z"
					transform="translate(-2 -2)"
					fill="#ff7070"
				/>
			</svg>
			공지사항
		</div>
		<div class="announce_title">
			모든 저작물(PDF)의 무단 배포를 금하며, 모든 저작물의 권리는 각 출판사(저작권자)에게 있음을
			알립니다.
		</div>
	</div>
</div>

<style lang="scss">
	.announce_bar {
		background: var(--announce-bar-color);
		transition: background 0.3s ease-in-out;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 72px;
		.wrap {
			width: 1553px;
			display: flex;
			flex-direction: row;
			justify-content: start;
			align-items: center;
			.announce_component {
				display: flex;
				flex-direction: row;
				width: auto;
				justify-content: space-between;
				align-items: center;
				color: var(--accent-text-color);
				transition: color 0.3s ease-in-out;
				font-size: 22px;
				font-weight: 600;
				margin-right: 24px;
				svg {
					margin-right: 12px;
					path {
						fill: var(--accent-text-color);
						transition: fill 0.3s ease-in-out;
					}
				}
			}
			.announce_title {
				color: var(--title-text-color);
				transition: color 0.3s ease-in-out;
				font-size: 22px;
			}
		}
	}
</style>
