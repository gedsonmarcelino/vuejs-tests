new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed:{
        result(){
            return this.value < 37 ? 'not there yet' : 'done';
        }
    },
    watch:{
        result(newValue, oldVlue){
            if ( newValue == 'done' ){
                setTimeout(() => {
                    this.value = 0;
                }, 5000);
            }
        }
    }

});