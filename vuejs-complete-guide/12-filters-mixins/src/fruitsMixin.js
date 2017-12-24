export const fruitsMixin = {
    data(){
        return{
            text: 'Hello there!',
            fruits: ['Mango', 'Strawberry', 'Orange','Melon'],
            filter: ''
        }
    },
    filters:{
        toUppercase( value ){
            return value.toUpperCase();
        }
    },
    computed:{
        filteredFruits(){
            return this.fruits.filter((element)=>{
                return element.match(this.filter);
            });
        }
    },
    created(){
        console.log('Created');
    }
};