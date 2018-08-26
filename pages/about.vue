<template>
<div>
	<landing :bigHeader="bigHeader" :smallHeader="smallHeader" :illustration="illustration"></landing>
	<hero v-for="(data, index) in aboutData" :key="index" :bigHeader="data.bigHeader" :hero="data.hero" :illustration="data.illustration" :heroBg="data.bg" :textColor="data.textColor" :inversed="true"></hero>
	<div class="section columns is-centered">
		<div class="column is-10-desktop">
			<div class="has-padding pv2">
				<p class="is-size-6 has-padding pv1 has-space is-uppercase">OUR WORKFORCE</p>
				<h1 class="title is-size-3-desktop is-size-4 has-text-info">The Innovation team
				</h1>
			</div>
			<div class="columns is-centered is-multiline is-variable is-4 commend_bg has-margin mv1">
				<pic-card  v-bind:person="commendation" :containerWidth="['is-3-desktop']" :detailAlign="['has-text-centered']" :detailCol="['is-12']" :pictureCol="['is-12']"></pic-card>
				<pic-card  v-bind:person="commendation" :containerWidth="['is-3-desktop']" :detailAlign="['has-text-centered']" :detailCol="['is-12']" :pictureCol="['is-12']"></pic-card>
				<pic-card  v-bind:person="commendation" :containerWidth="['is-3-desktop']" :detailAlign="['has-text-centered']" :detailCol="['is-12']" :pictureCol="['is-12']"></pic-card>
				<pic-card  v-bind:person="commendation" :containerWidth="['is-3-desktop']" :detailAlign="['has-text-centered']" :detailCol="['is-12']" :pictureCol="['is-12']"></pic-card>
			</div>
		</div>
	</div>
	<sponsors></sponsors>
</div>
</template>
<script>
	import Landing from "../components/landing";
	import Sponsors from "../components/sponsors";
	import PicCard from "../components/picCard";
	import Hero from "../components/heroSection";
	import About from "../assets/JSON/about.json";
	export default{
		
		head:{
			title: 'About Us :: DSIHUB'
		},
		layout: 'custom',
		components:{
			landing: Landing,
			sponsors: Sponsors,
			hero: Hero,
			picCard: PicCard
		},
		data(){
			return {
				smallHeader: "About us",
				bigHeader:{
					value: "The Hub and You",
					active: true
				},
				illustration:{
					value: "img/landing/about.svg",
					active: true
				},
				aboutData: About,
				commendation:{
					name: "Dr Ifeanyi Okowa",
					title: 'Governor, Delta State',
					pic: "img/gov.png"
				}
			}
		}

	};

</script>
<style lang="scss">

</style>