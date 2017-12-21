<template>
    <div>
        <h3>The New</h3>
        <button @click="counter++">Increase</button>
        <p>{{counter}}</p>

    </div>
</template>

<script>
    export default{
        data:()=>{
            return{
                counter: 0
            }
        },
        destroyed(){
            console.log('destroyed!');
        },
        activated(){
            console.log('activated!');
        },
        deactivated(){
            console.log('deactivated!');
        }
    }
</script>

<style>

</style>

