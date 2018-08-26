<template>
	<div class="column" :class="imageWidth">
		<a @click.prevent="getImageData()" class="is-block has-fullwidth image_container">
			<figure class="image is-16by9">
				<img :src="imageSrc">
			</figure>
			<div class="image_caption">
				<div class="is-block has-padding ph2 pv2">
					<div class="content">
						<h2 class="is-size-6 has-text-light">
							{{imageTitle}}
						</h2>
						<p class="is-size-6 has-text-light">
							{{imageCaption}}
						</p>
					</div>
					<div class="footer has-padding ph2 pv2">
						<p class="is-size-7 has-text-light has-space is-uppercase">
							OPEN FULL VIEW
						</p>
					</div>
				</div>
			</div>
		</a>
	</div>
</template>
<script>
	export default{
		props:{
			//Image Source
			imageSrc:{
				type: String,
				default(){
					return "img/default-bg.jpg"
				}
			},
			//Image Title
			imageTitle:{
				type: String,
				default(){
					return "Default Img"
				}
			},
			//Image Title
			imageCaption:{
				type: String,
				default(){
					return "Duis aute irure dolor in reprehenderit in voluptate velit esse"
				}
			},
			imageWidth:{
				type: Array,
				default(){
					return ['is-12']
				}
			},
			imageData:{
				type: Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			getImageData(){
				this.$emit('getImageData',this.imageData);
			}
		}
	};	
</script>
<style lang="scss" scoped>
	.image_container{
		outline: none;
		position: relative;
		overflow: hidden;
		@extend %feedback;

		.image_caption{
			display: block;
			position: absolute;
			bottom : -110%;
			z-index: 2;
			left: 0px;
			height: 100%;
			width: 100%;
			background: $blue;
			transition: bottom 0.4s ease-out;
			-webkit-transition: bottom 0.4s ease-out;

			div{
	 			position: relative;
	 			width: 100%;
	 			height: 100%;
	 			
	 			.footer{
					position: absolute;
					background: $blue;
					left: 0px;
					bottom: 0px;
					width: 80%;
					height: auto;
		 		}

		 		.content{
		 			p{
		 				overflow:hidden;
		 				white-space: nowrap;
						max-width: 80%;
						text-overflow: ellipsis;
		 			}

		 			h2{
		 				text-transform: capitalize;
		 				@extend p;
		 			}
		 		}
		 	}
 		}
		&:hover, &:focus{
			outline: none;

			.image_caption{
				bottom: 0px;
			}
		}

	}

</style>