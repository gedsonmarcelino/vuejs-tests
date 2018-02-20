new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            show(){
                alert('Clicked on show alert!')
            },
            onKeydown( event ){
                this.value = event.target.value
            }
        }
    });