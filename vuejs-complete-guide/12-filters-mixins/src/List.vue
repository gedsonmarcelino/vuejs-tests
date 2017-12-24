<template>
    <div>
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUppercase | to-lowercase }}</p>
        <hr>
        <label for="">Filter</label>
        <input type="text" v-model="filter" />
        <ul>
            <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitsMixin } from './fruitsMixin.js';

    export default {
        mixins:[ fruitsMixin ],
        created(){
            console.log('Created inside list hook');
        }
    }
</script>

<style>

</style>
