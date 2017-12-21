<template>

    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <p><label>Quote</label></p>
            <p>
                <textarea v-model="text"  class="form-control" rows="3" :disabled="disabled"></textarea>
            </p>
            <p>
                <button @click="addQuote" class="btn btn-primary">Add Quote</button>
            </p>
        </div>
    </div>

</template>

<script>
    export default{
        props:{
            disabled: false,
            amount: Number,
            limit:Number
        },
        data:()=>{
            return{
                text: ''
            }
        },
        methods:{
            addQuote(){
                if ( this.text != '' ){
                    console.log('Added quote');
                    this.$emit('wasAddedQuote', this.text);
                    this.text = '';
                }
            }
        }
    }
</script>

<style scoped>

</style>
