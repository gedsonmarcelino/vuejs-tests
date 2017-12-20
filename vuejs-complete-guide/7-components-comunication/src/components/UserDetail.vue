<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ age }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn">Reset Name</button>
    </div>
</template>

<script>
import {eventBus} from '../main';


export default{
    props: {
        name: {
            type: String
        },
        age: Number,
        resetFn: Function
    },
    methods: {
        switchName(){
            return this.name.split("").reverse().join("");
        },
        resetName(){
            this.name = 'Ged';
            this.$emit('wasResetName', this.name);
        }
    },
    created(){
        eventBus.$on('wasAgeEdited', (data) => {
            this.age = data;
        });
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
