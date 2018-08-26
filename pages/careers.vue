<template>
<div>
	<landing :bigHeader="bigHeader" :smallHeader="smallHeader" :illustration="illustration"></landing>
</div>
</template>
<script>
	import Landing from "../components/landing";
	export default{
		head:{
			title: 'Careers : DSIHUB'
		},
		layout: 'custom',
		components:{
			landing: Landing,
		},
		data(){
			return {
				smallHeader: "careers",
				bigHeader:{
					value: "Join our Community",
					active: true
				},
				illustration:{
					value: "img/career/flying-shoes.svg",
					active: true
				}
			}
		}

	};
</script>
<style lang="scss">
	
</style>