<template>
<div>
	<modal :modalData="dataIdCheck" :modalShow="modalOpen" :nullContent="['content','img']" @changeModalState="modalOpen = false" @previousData="switchData('previous')" @nextData="switchData('next')" :modalType=" 'image' "></modal>
	<landing :bigHeader="bigHeader" :smallHeader="smallHeader" :illustration="illustration"></landing>
	<div class="section columns is-centered">	
		<div class="column is-10">	
			<div class="columns is-centered is-multiline">	
				<div class="column is-4">
					<div class="columns is-centered is-multiline">	
						<image-card v-for="(data,index) in columnOne" v-bind:key="index + 1"  :imageTitle="data[0].title" :imageCaption="data[0].content" :imageSrc="data[0].img" :imageWidth="['is-12']" @getImageData="viewData($event)" :imageData="{imageIndex : data[1]}"></image-card>
					</div>
				</div>
				<div class="column is-4">
					<div class="columns is-centered is-multiline">	
						<image-card v-for="(data,index) in columnTwo" v-bind:key="index + 2" :imageTitle="data[0].title" :imageCaption="data[0].content" :imageSrc="data[0].img" :imageWidth="['is-12']" @getImageData="viewData($event)" :imageData="{imageIndex : data[1]}"></image-card>
					</div>
				</div>
				<div class="column is-4">
					<div class="columns is-centered is-multiline">	
						<image-card v-for="(data,index) in columnThree" v-bind:key="index + 3" :imageTitle="data[0].title" :imageCaption="data[0].content" :imageSrc="data[0].img" :imageWidth="['is-12']" @getImageData="viewData($event)" :imageData="{imageIndex : data[1]}"></image-card>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	import Landing from "~/components/landing";
	import ImageCard from "~/components/imageCard";
	import Gallery from "../assets/JSON/gallery.json";
	import Modal from "~/components/modal";
	export default{
		head:{
			title: 'Gallery :: DSIHUB'
		},
		layout: 'custom',
		components: {
			landing: Landing,
			imageCard: ImageCard,
			modal: Modal 
		},
		data(){
			return{
				smallHeader: "our Services",
				bigHeader:{
					value: "The Hub and You",
					active: true
				},
				illustration:{
					value: "/img/gallery/photo-camera.svg",
					active: true
				},
				gallery: Gallery,
				columnOne: [],
				columnTwo: [],
				columnThree:[],
				galleryLen: Gallery.length,
				modalOpen:false,
				dataId: 0
			}
		},
		methods:{
			retrieveJson(){
				let columnCount = 1;
				this.gallery.forEach( (image, index) => {
					switch (columnCount) {
						case 1:
							this.columnOne.push([image,index]);
							columnCount++ ;
							break;
						case 2:
							this.columnTwo.push([image,index]);
							columnCount++ ;
							break;
						case 3:
							this.columnThree.push([image,index]);
							columnCount = 1;
							break;
					}
				});
				return;
			},
			viewData(event){
				this.dataId = event.imageIndex;
				this.modalOpen = true;
			},
			switchData(type,event){
				switch (type) {
					case 'next':
						return this.dataId < this.galleryLen - 1 ? ++this.dataId : this.dataId ;
					case 'previous':
						return this.dataId > 0 ? --this.dataId : this.dataId ;
				}

			}
		},
		computed:{
			dataIdCheck(){
				return this.gallery[this.dataId]
			}
		},
		mounted(){
			this.retrieveJson();
		}
	};
</script>
<style lang="scss">
	
</style>
