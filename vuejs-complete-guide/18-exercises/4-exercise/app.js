new Vue({
	el: '#exercise',
	data: {
		classEffect: 'highlight',
		firstClass: '',
		secondClass: '',
		secondIs: false,
		styles: '',
		width: 0,
		interval: null
	},
	watch: {
		width(newValue, oldValue){
			if ( newValue == 200 ){
				console.log('clear interval');
				
				clearInterval( this.interval );
			}
		}
	},
	methods: {
		startEffect() {
			var vm = this;
			setInterval(()=>{
				vm.classEffect = vm.classEffect == 'highlight' ? 'shrink' : 'highlight';
			}, 2000)
		},
		startProgress(){
			var vm = this;
			this.interval = setInterval(()=>{				
				if ( vm.width < 200 ){
					vm.width += 10;
					vm.$refs.progressBar.style.width = vm.width+'px';
				}
			}, 500)
		}
	}
});
