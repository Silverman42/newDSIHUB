<template>
<div>
	<landing :bigHeader="bigHeader" :smallHeader="smallHeader" :illustration="illustration"></landing>
	<div class="section columns is-centered">	
		<div class="column is-10">	
			<div class="columns is-centered is-multiline">	
				<div class="column is-4">
					<div class="columns is-centered is-multiline">	
						<data-card v-for="(data,index) in columnOne" v-bind:key="index + 1" :isLink="false" :head="data.title" :body="data.content" :paragraphCount="data.content.length" :cardWidth="['is-12']"></data-card>
					</div>
				</div>
				<div class="column is-4">
					<div class="columns is-centered is-multiline">	
						<data-card v-for="(data,index) in columnTwo" v-bind:key="index + 2" :isLink="false" :head="data.title" :body="data.content" :paragraphCount="data.content.length" :cardWidth="['is-12']"></data-card>
					</div>
				</div>
				<div class="column is-4">
					<div class="columns is-centered is-multiline">	
						<data-card v-for="(data,index) in columnThree" v-bind:key="index + 3" :isLink="false" :head="data.title" :body="data.content" :paragraphCount="data.content.length" :cardWidth="['is-12']"></data-card>
					</div>
				</div>
			</div>
		</div>
	</div>
	<sponsors></sponsors>
</div>
</template>
<script>
	import Landing from "../components/landing";
	import Sponsors from "../components/sponsors";
	import DataCard from "../components/dataCard";
	import Services from "../assets/JSON/services.json";
	export default{
		head:{
			title: 'Services : DSIHUB'
		},
		layout: 'custom',
		components:{
			landing: Landing,
			sponsors: Sponsors,
			dataCard: DataCard
		},
		data(){
			return {
				smallHeader: "our Services",
				bigHeader:{
					value: "The Hub and You",
					active: true
				},
				illustration:{
					value: "img/service/services.svg",
					active: true
				},
				services: Services,
				columnOne: [],
				columnTwo: [],
				columnThree:[],
			}
		},
		methods:{
			retrieveJson(){
				let columnCount = 1;
				for (let service of this.services) {
					switch (columnCount) {
						case 1:
							this.columnOne.push(service);
							columnCount++ ;
							break;
						case 2:
							this.columnTwo.push(service);
							columnCount++ ;
							break;
						case 3:
							this.columnThree.push(service);
							columnCount = 1;
							break;
					}
				}
				return;
			}
		},
		mounted(){
			this.retrieveJson();
		}

	};
</script>
<style lang="scss">
	
</style>