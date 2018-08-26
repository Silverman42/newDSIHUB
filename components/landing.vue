<template>	
<div class="section columns is-centered landing-bg" >
	<div class="column is-10-desktop">
		<div class="columns is-centered is-multiline">
			<div class="column is-6-desktop is-12-mobile is-flex landing-hero">
				<div class="has-margin mv3 has-fullwidth">
					<p v-if="smallHeader" class="has-space is-uppercase has-padding pv1 ph1 has-text-centered-mobile is-size-6">{{smallHeader}}</p>
					<h1 v-if="bigHeader.active" class="title is-size-3-desktop is-size-4 has-text-left has-text-centered-mobile">
					{{bigHeader.value}}
					</h1>
					<div v-if="button.active" class="has-text-left has-padding pv1 ph1 has-text-centered-mobile">
						<nuxt-link to="/about" class="button is-info is-rounded is-shadowed is-uppercase is-size-7 has-space has-padding pv2">
						{{button.value}}
						</nuxt-link>
					</div>
					<p v-if="legend.active" class="is-size-6 has-padding pv1 ph1 has-text-centered-mobile" v-html="legend.value">{{legend.value}}</p>
				</div>
			</div>
			<div v-if="illustration.active" class="column is-block is-relative is-6-desktop has-padding ph1  has-margin mv3">
				<figure class="image is-16by9" style="z-index: 2">
					<img :src="illustration.value">	
				</figure>
				<div class="is-block illustration_bg">
					<figure class="image is-5by4">
						<img src="img/DSIHUB_background.svg">	
					</figure>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		props:{
			smallHeader:{
				type: String,
				default: function(){
					return null;
				}
			},
			bigHeader:{
				type: Object,
				default: function(){
					return{
						value: "",
						active: false
					}
				}
			},
			button:{
				type: Object,
				default: function(){
					return{
						value: "",
						active: false
					}
				}
			},
			legend:{
				type: Object,
				default: function(){
					return{
						value: "",
						active: false
					}
				}
			},
			illustration:{
				type: Object,
				default: function(){
					return{
						value: "",
						active: false
					}
				}
			}
		},
		data(){
			return{
				img_dir:""
			}
		}
	};
</script>
<style lang="scss" scoped>
	.illustration_bg{
		position: absolute;
		top: -50px;
		right: 0;
		bottom: 0;
		width: 100%;
		z-index: 1;
	}
	.landing-hero{
		align-items: center;
		-webkit-align-items: center;
	}
	.landing-bg{
		background : url(../static/img/landing/landing_bg.svg) no-repeat;
		background-size: cover;
		background-position: center;
	}
</style>