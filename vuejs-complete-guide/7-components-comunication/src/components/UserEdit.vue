<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Age: {{age}}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
import {eventBus} from '../main';

export default{
    props: ['age'],
    methods:{
        editAge(){
            this.age = 30;
            // this.$emit('wasAgeEdited', this.age);
            // eventBus.$emit('wasAgeEdited', this.age);
            eventBus.changeName( this.age );
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
