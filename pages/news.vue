<template>
<div>
	<div class="section columns is-centered">
		<div class="column is-10-desktop">	
			<div class="has-padding pv2">
				<p class="is-size-6 has-padding pv1 has-space is-uppercase">FROM THE HUB</p>
				<h1 class="title is-size-3-desktop is-size-4 has-text-left">Updates
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
				<nav class="pagination is-rounded is-centered" role="navigation" aria-label="pagination">
				  <a class="pagination-previous is-size-7 is-uppercase has-space has-padding pv2">Previous</a>
				  <a class="pagination-next is-size-7 is-uppercase has-space has-padding pv2">Next page</a>
				  <ul class="pagination-list">
				    <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
				    <li><span class="pagination-ellipsis">&hellip;</span></li>
				    <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
				    <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
				    <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
				    <li><span class="pagination-ellipsis">&hellip;</span></li>
				    <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
				  </ul>
				</nav>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	import DataCard from "../components/dataCard";
	export default{
		head:{
			title: 'News from the blog :: DSIHUB'
		},
		components:{
			dataCard: DataCard,
		},
		data(){
			return{
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
	
</style>