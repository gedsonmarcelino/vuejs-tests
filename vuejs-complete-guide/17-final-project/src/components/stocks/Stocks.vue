<template>
	<div>
		<app-stock v-for="item in stocks" :stock="item"></app-stock>
	</div>
</template>

<script>
	import Stock from './Stock.vue'

	export default {
		components: {
			appStock: Stock
		},
		computed: {
			stocks(){
				return this.$store.getters.stocks
			}
		}
	}
</script>