<template>
	<div class="section columns is-centered" :style="heroBg">
		<div class="column is-10-desktop">
			<div v-if="inversed" class="columns is-centered is-multiline">
				<div v-if="illustration" class="column is-block is-relative is-6-desktop has-padding ph1 has-margin mv3">
					<figure class="image is-16by9" style="z-index: 2">
						<img :src="illustration">	
					</figure>
				</div>
				<div class="column is-6-desktop is-12-mobile is-flex landing-hero">
					<div class="has-margin mv3 has-fullwidth">
						<p v-if="smallHeader" class="has-space is-uppercase has-padding pv1 ph1 has-text-centered-mobile is-size-6" :class="textColor">{{smallHeader}}</p>
						<h1 v-if="bigHeader" class="title is-size-3-desktop is-size-4 has-text-left has-text-centered-mobile" :class="textColor">
						{{bigHeader}}
						</h1>
						<div v-if="button" class="has-text-left has-padding pv1 ph1 has-text-centered-mobile">
							<nuxt-link to="/about" class="button is-info is-rounded is-shadowed has-padding pv3">
							<b>{{button}}</b>
							</nuxt-link>
						</div><p v-if="hero" class="is-size-6 has-padding pv1 ph1 has-text-centered-mobile" :class="textColor" v-html="hero">{{hero}}</p>
					</div>
				</div>
			</div>
			<div v-else class="columns is-centered is-multiline">
				<div class="column is-6-desktop is-12-mobile is-flex landing-hero">
					<div class="has-margin mv3 has-fullwidth">
						<p v-if="smallHeader" class="has-space is-uppercase has-padding pv1 ph1 has-text-centered-mobile is-size-6" :class="textColor">{{smallHeader}}</p>
						<h1 v-if="bigHeader" class="title is-size-3-desktop is-size-4 has-text-left has-text-centered-mobile" :class="textColor">
						{{bigHeader}}
						</h1>
						<div v-if="button" class="has-text-left has-padding pv1 ph1 has-text-centered-mobile">
							<nuxt-link to="/about" class="button is-info is-rounded is-shadowed has-padding pv3">
							<b>{{button}}</b>
							</nuxt-link>
						</div><p v-if="hero" class="is-size-6 has-padding pv1 ph1 has-text-centered-mobile" :class="textColor" v-html="hero">{{hero}}</p>
					</div>
				</div>
				<div v-if="illustration" class="column is-block is-relative is-6-desktop has-padding ph1 has-margin mv3">
					<figure class="image is-16by9" style="z-index: 2">
						<img :src="illustration">	
					</figure>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props: {
			smallHeader:{
				type: String,
				default(){
					return null;
				}
			},
			bigHeader:{
				type: String,
				default(){
					return null
				}
			},
			button:{
				type: String,
				default(){
					return null
				}
			},
			hero:{
				type: String,
				default(){
					return "";
				}
			},
			illustration:{
				type: String,
				default(){
					return ""
				}
			},
			textColor:{
				type: Array,
				default(){
					return []
				}
			},
			heroBg:{
				type: Array,
				default(){
					return []
				}
			},
			inversed:{
				type: Boolean,
				default(){
					return false
				}
			},
		}
	};
</script>
<style lang="scss" scoped>
	.landing-hero{
		align-items: center;
		-webkit-align-items: center;
	}
</style>
