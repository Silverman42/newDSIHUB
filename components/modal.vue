<template>
	<div class="custom-modal" :class="{modal_show : modalShow}" ref="customModal">
		<section class="section columns is-centered is-multiline">
			<div class="column is-10 has-text-right modal_close">
				<a @click.prevent="changeModalState()" class="is-size-5">
					<i class="fas fa-times"></i>
				</a>
			</div>
			<div class="column is-10">
				<div class="columns is-centered is-multiline">
					<div v-if="modalType == 'image' "  class="column is-12">
						<figure class="image is-16by9">
							<img :src="modalData.img">
						</figure>
					</div>
					<div v-else class="column is-12">
						<div class="modal_header">
							<div class="modal_title has-padding pv3 ph3">
								<h2 class="title is-size-3-desktop is-size-4 has-text-light">{{modalData.title}}</h2>
							</div>
							<div class="modal_bg" :style="{background : 'url(' + modalData.bg + ')'}" style="background-size: 100%">
								
							</div>
						</div>
					</div>
					<div class="column is-6">
						<div class="has-margin mv2">
							<h1 class="title is-size-6">Description</h1>
							<div class="has-text-justified is-size-6" v-html="modalData.content">{{modalData.content}}</div>
						</div>
					</div>
					<div class="column is-6">
						<div v-for="(data, type, index) in modalData" :key="index" class="has-margin mv3" v-if="!nullContent.includes(type)">	
							<h1 class="title is-size-6 modal_content-title">{{type}}</h1>
							<nuxt-link :to="data" v-if="type == 'applyLink'" class="button is-rounded is-info is-size-7 is-uppercase has-space has-padding pv2">
								Click here to apply
							</nuxt-link>
							<p v-else class="has-text-justified is-size-6">
								{{data}}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="column is-10 has-text-right">
				<a @click.prevent="previousData()" class="button is-info is-rounded is-outlined is-shadowed is-size-7 is-uppercase has-space has-padding pv2">Previous</a>&nbsp;&nbsp;
				<a @click.prevent="nextData()" class="button is-info is-rounded is-outlined is-shadowed is-size-7 is-uppercase has-space has-padding pv2">Next</a>
			</div>			
		</section>
	</div>
</template>
<script>
   export default{
   		props:{
   			modalShow:{
   				type: Boolean,
   				default(){
   					return false
   				},
   			},
   			modalData:{
   				type: Object,
   				default(){
   					return {};
   				}
   			},
   			nullContent:{
   				type: Array,
   				default(){
   					return []
   				}
   			},
   			modalType:{
   				//Modal Type -- Choose "image" for image only illustration
   				type: String,
   				default(){
   					return null;
   				}
   			}
   		},
   		methods:{
   			changeModalState(){
   				this.$emit('changeModalState',{});
   			},
   			previousData(){
   				this.$refs.customModal.scrollTop = 0;
   				this.$emit('previousData',{});
   			},
   			nextData(){
   				this.$refs.customModal.scrollTop = 0;
   				this.$emit('nextData',{});
   			}
   		}
   };
</script>
<style lang="scss" scoped>
	.custom-modal{
		position: fixed;
		bottom: 0px;
		left: 110vw;
		width: 100%;
		z-index: 1000;
		background: white;
		overflow-x: hidden;
		height: 100vh;
    	overflow-y: auto;
    	transition: left 0.4s ease-out;
    	-webkit-transition: left 0.4s ease-out;
	}
	.modal_header{
		min-height: 300px;
		width: 100%;
		display: block;
		position: relative;

		.modal_bg{
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 0;
			background-position: center !important; 
			filter: brightness(40%);
			-webkit-filter: brightness(40%);
		}
		.modal_title{
			position: relative;
			z-index: 2;		
		}
	}
	.modal_close{
		color: rgb(230,230,230);
		a:hover, a:focus{
			color: black;
		}
	}
	.modal_show{
		left: 0vh;
	}
	.modal_content-title{
		text-transform: capitalize;
	}

</style>
