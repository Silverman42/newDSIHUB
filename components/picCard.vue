<template>
	<div class="column has-margin mv1" :class="containerWidth">
		<div class="columns is-multiline is-centered has-padding pv2 picCard ">	
			<div class="column" v-bind:class="pictureCol">
				<nav class="level has-margin mv2">
					<div class="level-item">
						<div class="picCard-img">
							<figure class="image is-square">	
								<img class="is-rounded" v-bind:src="person.pic">
							</figure>
						</div>
					</div>	
				</nav>
			</div>
			<div class="column is-flex has-wrap" v-bind:class="detailCol">	
				<p v-if="person.quote" class="is-size-6 has-margin mv1 has-text-grey has-text-justified">	
					{{person.quote}}
				</p>
				<div class="has-text-centered-mobile detailMeta has-fullwidth" :class="detailAlign">
					<b class="is-size-6 has-margin mv1">{{person.name}}</b>
					<p class="is-size-6 has-margin mv1">{{person.title}} </p>
					<div v-if="detailContact !== {}" class="is-size-6">
						<span></span>
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>
<script>
export default{
	props:{
		person:	{
			type: Object,
			default: function(){
				return {
					name: "Ifeanyi Okowa",
					title: null,
					quote: "",
					pic: ""
				}
			}
		},
		pictureCol:{
			type: Array,
			default: function() {
				return ['is-3-desktop']
			}	
		},
		detailCol:{
			type: Array,
			default: function() {
				return ['is-9-desktop'];
			}
		},
		containerWidth:{
			type: Array,
			default: function() {
				return ['is-6-desktop'];
			}
		},
		detailAlign:{
			type: Array,
			default(){
				return [];
			}
		},
		detailContact:{
			type: Object,
			default(){
				return {};
			}
		}
	}

};
</script>
<style lang="scss">
	.picCard{
		border: 0.8px solid #ebebeb;
		min-height: 100px;
		background: #fafafa;
		transition: transform 0.4s ease-out, box-shadow 0.4s ease-out;
		-webkit-transition: transform 0.4s ease-out, box-shadow 0.4s ease-out;


		&:hover, &:focus{
			transform: translateY(-10px);
			-webkit-transform: translateY(-10px);
			-moz-transform: translateY(-10px);
			box-shadow: $box-shadow;
		}
	}
	.picCard-img{
		width: 80px;
		height: 80px;
		overflow: hidden;
	}
	.detailMeta{
		align-self: flex-end;
		-webkit-align-self: flex-end;
	}
</style>