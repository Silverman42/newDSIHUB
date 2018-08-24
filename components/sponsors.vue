<template>
	<section class="section columns is-centered sponsor-bg">
		<div class="column is-10-desktop">
			<div class="has-padding pv2">
				<p class="is-size-6 has-padding pv1 has-space is-uppercase">sponsors</p>
				<h1 class="title is-size-3-desktop is-size-4 has-text-left has-text-grey-dark">Our Contributors
				</h1>
			</div>
			<div class="columns is-centered is-multiline is-mobile has-margin mv2 icon-contain">
				<div class="column is-6-mobile is-3-desktop has-padding pv2">
					<a class="image is-64x64 is-block image-center">
						<img src="/img/sponsors/zenith-bank.png">
					</a>
				</div>
				<div class="column is-6-mobile is-3-desktop has-padding pv2">
					<a class="image is-64x64 is-block image-center">
						<img src="/img/sponsors/MainOne.png">
					</a>
				</div>
				<div class="column is-6-mobile is-3-desktop has-padding pv2">
					<a class="image is-64x64 is-block image-center">
						<img src="/img/sponsors/GT-bank.png">
					</a>
				</div>
				<div class="column is-6-mobile is-3-desktop has-padding pv2">
					<a class="image is-64x64 is-block image-center">
						<img src="/img/sponsors/deltastate.png">
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	.contain{
		display: flex;
		display: -webkit-flex;
	}
	.sponsor-bg{
		background-color: #f1f1f1;
	}

	.image-center{
		margin: auto;
		filter: grayscale(100%);
		-webkit-filter: grayscale(100%);
		opacity: 0.6;
	}
	.icon-contain{
		background: #e4e4e4
	}
</style>