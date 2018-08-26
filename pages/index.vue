<template>
<div>
	<landing :bigHeader="header" :button="button" :legend="legend" :illustration="illustration"></landing>
	<!--features Section-->
	<div class="section columns is-centered">
		<div class="column is-10">
			<div class="columns is-centered is-multiline">
				<div class="column is-3-desktop has-text-centered has-margin mv1">
					<nav class="level feature_bg">
						<div class="level-item">
							<figure class="image is-64x64">
								<img src="img/interview.svg">
							</figure>
						</div>
					</nav>
					<h2 class="title is-size-5">
					ICT Consultancy
					</h2>
					<p class="is-size-6 has-text-grey">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					</p>
				</div>
				<div class="column is-3-desktop has-text-centered has-margin mv1">
					<nav class="level feature_bg">
						<div class="level-item">
							<figure class="image is-64x64">
								<img src="img/meeting-point.svg">
							</figure>
						</div>
					</nav>
					<h2 class="title is-size-5">
					Tech Meetups
					</h2>
					<p class="is-size-6 has-text-grey">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					</p>
				</div>
				<div class="column is-3-desktop has-text-centered has-margin mv1">
					<nav class="level feature_bg">
						<div class="level-item">
							<figure class="image is-64x64">
								<img src="img/workspace.svg">
							</figure>
						</div>
					</nav>
					<h2 class="title is-size-5">
					Condusive Workspaces
					</h2>
					<p class="is-size-6 has-text-grey">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					</p>
				</div>
				<div class="column is-3-desktop has-text-centered has-margin mv1">
					<nav class="level feature_bg">
						<div class="level-item">
							<figure class="image is-64x64">
								<img src="img/innovation.svg">
							</figure>
						</div>
					</nav>
					<h2 class="title is-size-5">
					Reliable Power supply
					</h2>
					<p class="is-size-6 has-text-grey">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					</p>
				</div>
			</div>
		</div>
	</div>
	<!--Admin Block-->
	<div class="section columns is-centered">
		<div class="column is-10-desktop">
			<div class="has-padding pv2">
				<p class="is-size-6 has-padding pv1 has-space is-uppercase">COMMENDATIONS</p>
				<h1 class="title is-size-3-desktop is-size-4 has-text-info">From the Administrative Desk
				</h1>
			</div>
			<div class="columns is-centered is-multiline is-variable is-4 commend_bg has-margin mv1">
				<pic-card v-for="(commendation, index) in commendations" v-bind:person="commendation" v-bind:key="index"></pic-card>
			</div>
		</div>
	</div>
	<div class="section columns is-centered">
		<div class="column is-10-desktop">	
			<div class="has-padding pv2">
				<p class="is-size-6 has-padding pv1 has-space is-uppercase">FROM THE HUB</p>
				<h1 class="title is-size-3-desktop is-size-4 has-text-left has-text-info">Updates
				</h1>
			</div>
			<div class="columns is-centered is-multiline has-margin mv1">
				<data-card :head="blogPost.head" :foot="blogPost.foot" :body="blogPost.body" :cardWidth="['is-8']" :type="'picture'"></data-card>
				<data-card :head="blogPost.head" :foot="blogPost.foot" :body="blogPost.body" :cardWidth="['is-4']"></data-card>
				<data-card :head="blogPost.head" :foot="blogPost.foot" :body="blogPost.body" :cardWidth="['is-4']"></data-card>
				<data-card :head="blogPost.head" :foot="blogPost.foot" :body="blogPost.body" :cardWidth="['is-4']"></data-card>
				<data-card :head="blogPost.head" :foot="blogPost.foot" :body="blogPost.body" :cardWidth="['is-4']"></data-card>
				<data-card :head="blogPost.head" :foot="blogPost.foot" :body="blogPost.body" :cardWidth="['is-4']"></data-card>
				<data-card :head="blogPost.head" :foot="blogPost.foot" :body="blogPost.body" :cardWidth="['is-4']"></data-card>
				<data-card :head="blogPost.head" :foot="blogPost.foot" :body="blogPost.body" :cardWidth="['is-4']"></data-card>
			</div>
			<div class="has-padding pv2">
				<nuxt-link to="/news" class="button is-info is-rounded is-shadowed is-size-7 is-uppercase has-space has-padding pv2">
					Read More
				</nuxt-link>
			</div>
		</div>
	</div>
	<sponsors></sponsors>
</div>
</template>
<script>
	import Landing from "../components/landing";
	import PicCard from "../components/picCard";
	import DataCard from "../components/dataCard";
	import Sponsors from "../components/sponsors";
	export default{
		
		head:{
			title: 'Welcome to DSIHUB'
		},
		components:{
			landing: Landing,
			picCard: PicCard,
			dataCard: DataCard,
			sponsors: Sponsors
		},
		data(){
			return {
				header:{
					value: "We create, We Innovate",
					active: true
				},
				button:{
					value: "Know the Hub",
					active: true
				},
				legend:{
					value: "Welcome to <b>Delta State Innovation Hub </b>,<br> Home of Innovation in the Niger",
					active: true
				},
				illustration:{
					value: "img/landing/desk.svg",
					active: true
				},
				commendations:[{
					name: "Dr Ifeanyi Okowa",
					title: 'Governor, Delta State',
					quote: '"Delta State government endorses the establishment and mission of the Hub. Welcome to Delta State, a land of peace and promise. Blessed with a rich and diverse cultural heritage, Delta State is located in the south-south geopolitical zone of Nigeria, famous for her serene environment, minerals and oil rich lands and friendly occupants. We welcome Investors to our State and promise security and crime free environment for them to undertake the business ventures."',
					pic: "img/gov.png"
				},
				{
					name: "Dr Ifeanyi Okowa",
					title: 'Director, Delta State Innovation Hub',
					quote: '"Welcome to Delta State Innovation Hub, where we aim to create a Smart Delta. The Hub is a one-stop Hub of ICT transactions going on around the clock. we are desirous to become the first internationally accredited regional centre of innovation and knowledge creation in the South-South of Nigeria.Located in Asaba - the State capital of the Oil & Gas rich Delta Region of Nigeria"',
					pic: "img/director.jpg"
				}
				],
				blogPost:{
					head: "The Hub is a one-stop Hub of ICT transactions going on around the clock desirous",
					body: "The Hub is a one-stop Hub of ICT transactions going on around the clock. we are desirous to become the first internationally accredited regional centre of innovation and knowledge creation in the South-South of Nigeria",
					foot:"16th DEC 2018"
				}
			}
		},
		layout: 'custom'
	};
</script>
<style lang="scss">
	%bg-structure{
		background: url(../static/img/feature_bg.svg) no-repeat;
		background-size:  contain;
	background-repeat:   no-repeat;
	background-position: center;
	}
	.feature_bg{
		@extend %bg-structure;
		padding-bottom: calc(30% * 11/ 18);
	}
	.commend_bg{
		@extend %bg-structure;
		padding-bottom: calc(10% * 11/ 18);
	}
</style>