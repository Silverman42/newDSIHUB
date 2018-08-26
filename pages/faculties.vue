<template>
<div>
	<modal :modalData="dataIdCheck" :modalShow="modalOpen" :nullContent="['content','bg','title']" @changeModalState="modalOpen = false" @previousData="switchData('previous')" @nextData="switchData('next')"></modal>
	<landing :bigHeader="bigHeader" :smallHeader="smallHeader" :illustration="illustration"></landing>
	<div class="section columns is-centered">	
		<div class="column is-10">	
			<div class="columns is-centered is-multiline is-variable is-0">	
				<data-card v-for="(data,index) in facultyData" v-bind:key="index + 3" :type="'picture'" :isLink="false" :head="data.title" :body="data.cursory" :foot="'read more'" @getCardData="viewData($event)" :cardData="{cardIndex : index}" :cardWidth="['is-4']" :bgPic="data.bg"></data-card>
			</div>
		</div>
	</div>
	<sponsors></sponsors>
</div>
</template>
<script>
	import Landing from "~/components/landing";
	import Sponsors from "~/components/sponsors";
	import DataCard from "~/components/dataCard";
	import Modal from "~/components/modal";
	import Faculties from "../assets/JSON/faculty.json";
	export default{
		head:{
			title: 'Faculties : DSIHUB'
		},
		layout: 'custom',
		components:{
			landing: Landing,
			sponsors: Sponsors,
			dataCard: DataCard,
			modal: Modal
		},
		data(){
			return {
				smallHeader: "our faculties",
				bigHeader:{
					value: "The Hub and You",
					active: true
				},
				illustration:{
					value: "/img/faculty/coding.svg",
					active: true
				},
				facultyData: Faculties,
				facultyDataLen: Faculties.length,
				modalOpen:false,
				dataId: 0
			}
		},
		methods:{
			viewData(event){
				this.dataId = event.cardIndex;
				this.modalOpen = true;
			},
			switchData(type,event){
				switch (type) {
					case 'next':
						return this.dataId < this.facultyDataLen - 1 ? ++this.dataId : this.dataId ;
					case 'previous':
						return this.dataId > 0 ? --this.dataId : this.dataId ;
				}

			}
		},
		computed:{
			dataIdCheck(){
				return this.facultyData[this.dataId]
			}
		}

	};
</script>
<style lang="scss">
	
</style>