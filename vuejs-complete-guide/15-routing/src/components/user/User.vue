<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
        <hr>
        <router-view></router-view>
    </div>

</template>

<script>
    export default{
        // data(){
        //     return{
        //         id: this.$route.params.id
        //     }
        // },
        // watch:{
        //     '$route'(to,from){
        //         this.id = to.params.id;
        //     }
        // },
        // props:['id'], // vue-router 2.2
        methods:{
            navigateToHome(){
                // this.$router.push('/')
                this.$router.push({name:'home'})
            }
        }
    }
</script>