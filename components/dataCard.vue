<template>
	<div v-if="type == 'picture' "  class="column" :class="cardWidth">
		<!--With link to another component-->
		<nuxt-link v-if="isLink" :to='cardLink' class="is-block has-padding pv2 ph1 card-box">
			<div class="pic-content has-wrap">
				<div class="pic_card-body has-padding pv2 ph2 has-fullwidth">
					<h2 class="title has-text-white is-size-5">{{head | limitDataSize(headerCount)}}</h2>
				</div>
				<div class="pic_card-body has-padding pv2 ph2 has-fullwidth">
					<p class="is-size-6  ">{{body | limitDataSize(paragraphCount)}}</p>
				</div>
				<div v-if="foot" class="pic_card-footer has-padding pv2 ph2">
					<p class="is-size-7 has-space is-uppercase">{{foot}}</p>
				</div>
			</div>
			<div class="pic_card-prebg">
				
			</div>
			<div class="pic_card-bg" :style="{'background': 'url('+ bgPic +')'}">
				
			</div>
		</nuxt-link>
		<!--Clickable with an event handler-->
		<a v-else @click.prevent="getCardData" class="is-block has-padding pv2 ph1 card-box">
			<div class="pic-content has-wrap">
				<div class="pic_card-body has-padding pv2 ph2 has-fullwidth">
					<h2 class="title has-text-white is-size-5">{{head | limitDataSize(headerCount)}}</h2>
				</div>
				<div class="pic_card-body has-padding pv2 ph2 has-fullwidth">
					<p class="is-size-6  ">{{body | limitDataSize(paragraphCount)}}</p>
				</div>
				<div v-if="foot" class="pic_card-footer has-padding pv2 ph2">
					<p class="is-size-7 has-space is-uppercase">{{foot}}</p>
				</div>
			</div>
			<div class="pic_card-prebg">
				
			</div>
			<div class="pic_card-bg" :style="{'background': 'url('+ bgPic +')'}">
				
			</div>
		</a>
	</div>
	<div v-else class="column" :class="cardWidth">
		<!--With link to another component-->
		<nuxt-link :to='cardLink' v-if='isLink' class="is-block has-padding pv2 ph1 card-box">
			<div class="no_pic-content">
				<div v-if="headillustration" class="card-body has-padding pv2 ph2">
					<figure class="image is-32x32">	
						<img :src="headillustration">
					</figure>
				</div>
				<div class="card-body has-padding pv2 ph2">
					<h2 class="title is-size-5">{{head | limitDataSize(headerCount)}}</h2>
				</div>
				<div class="card-body has-padding pv2 ph2">
					<p class="is-size-6 ">{{body | limitDataSize(paragraphCount)}}</p>
				</div>
				<div v-if="foot" class="card-footer has-padding pv2 ph2">
					<p class="is-size-7 has-space is-uppercase">{{foot}}</p>
				</div>
			</div>
			<div class="card-bg">
				
			</div>
		</nuxt-link>
		<!--Only Hoverable-->
		<a v-else @click.prevent="getCardData" class="is-block has-padding pv2 ph1 card-box">
			<div class="no_pic-content">
				<div v-if="headillustration" class="card-body has-padding pv2 ph2">
					<figure class="image is-32x32">	
						<img :src="headillustration">
					</figure>
				</div>
				<div class="card-body has-padding pv2 ph2">
					<h2 class="title is-size-5">{{head | limitDataSize(headerCount)}}</h2>
				</div>
				<div class="card-body has-padding pv2 ph2">
					<p class="is-size-6 ">{{body | limitDataSize(paragraphCount)}}</p>
				</div>
				<div v-if="foot" class="card-footer has-padding pv2 ph2">
					<p class="is-size-7 has-space is-uppercase">{{foot}}</p>
				</div>
			</div>
			<div class="card-bg">
				
			</div>
		</a>
	</div>

</template>
<script>
	export default{
		props:{
				head:{
					type: String,
					default:function () {
						return null
					}
				},
				body: {
					type: String,
					default:function () {
						return null
					}
				},
				foot: {
					type: String,
					default:function () {
						return null
					}
				},
				bgPic: {
					type: String,
					default:function() {
						return 'img/default-bg.jpg'
					}
				},
				cardWidth: {
					type: Array,
					default:function () {
						return ['is-3-desktop'];
					}
				},
				type:{
					type: String,
					default:function () {
						return '';
					}
				},
				headerCount:{
					type: Number,
					default:function () {
						return 90;
					}
				},
				paragraphCount:{
					type: Number,
					default:function () {
						return 100;
					}
				},
				cardLink:{
					type: String,
					default:function () {
						return '/news';
					}
				},
				headillustration:{
					type: String,
					default:function () {
						return null;
					}
				},
				isLink:{
					type: Boolean,
					default:function(){
						return true;
					}
				},
				cardData:{
					type: Object,
					default(){
						return {};
					}
				}
		},
		methods:{
			getCardData(){
				let data = this.cardData;
				this.$emit('getCardData',data);
			}
		},
		filters:{
			limitDataSize(data, desiredSize){
				return data.length >= desiredSize ? data.substring(0, desiredSize)+'...' : data ;			
			}
		}
	};
</script>
<style lang="scss" scoped>
.card-box{
	border: 0.8px solid #ebebeb;
	position: relative;
	text-decoration: none;
	outline: none;
	min-height: 300px;
	overflow: hidden;
	@extend %feedback;

	%card_box-bg{
		display:block;
		position:absolute;
		top: 0;
		height: 100%;
		width: 100%;
		left: 0;
	}

	%card_box-footer{
		position: absolute;
		bottom: 0px;
		width: 100%;
		height: auto;
		border: 0px;
	}

	.pic-content{
		width: 100%;
		height: 100%;
		.pic_card-body{
			color: white;
		}
		.pic_card-footer{
			color: white
		}

		.pic_card-footer{
		@extend %card_box-footer;
		}

		&:hover, &:focus{
			color: white;
		}

	}

	.pic_card-bg{
		background-size: cover !important;
		background-position: center !important;
		z-index: -2;
		@extend %card_box-bg;
		@include transitions(transform 0.4s ease-out);

	}
	.pic_card-prebg{
		background: rgba(6,91,148, 0.7);
		z-index: -1;
		@extend %card_box-bg;
	}


	//Card without picture background
	.no_pic-content{
		width: 100%;
		height: 100%;
		color: black;
		@include transitions(color 0.4s ease-out);

		.card-body>p{
			color: $grey-dark;
		}
		.card-footer{
			@extend %card_box-footer;
		}

	}
	.card-bg{
		background:#fafafa;
		z-index: -2;
		@extend %card_box-bg;
		@include transitions(background 0.4s ease-out);
	}

	&:hover,&:focus{
		.pic_card-bg{
			transform: scale(1.1,1.1);
			-webkit-transform: scale(1.1,1.1);
		}
		
		.card-bg{
			background:$blue;
		}

		.no_pic-content{
			.card-body>p{
				color: white;
			}
			.card-body>h2{
				color: white;
			}
			.card-footer{
				color: white;
			}
		}
	}

}

</style>

