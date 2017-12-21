<template>

    <div class="row">
        <div class="col-md-4" v-for="(quote,index) in quotes" :key="index">
            <blockquote @click="deleteQuote(index)">
                {{quote}}
            </blockquote>
        </div>
    </div>

</template>

<script>
    export default{
        props:{
            quotes:Array
        },
        methods:{
            deleteQuote( index ){
                if ( confirm("Are you sure that you want delete this item?") ){
                    this.$emit('wasDeletedQuote', index);
                }
            }
        }
    }
</script>

<style scoped>
blockquote{
    cursor: pointer;
}

blockquote:hover{
    background-color: #ffe2e2;
}
</style>
