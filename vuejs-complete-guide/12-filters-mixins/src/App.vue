<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <label for="">Filter</label>
                <input type="text" v-model="filter" />
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>

                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
import List from './List.vue';
import {fruitsMixin} from './fruitsMixin.js';

export default {
    mixins:[fruitsMixin],
    components:{
        appList: List
    },
    data(){
        return{
            text: 'Hello there!',
        }
    },
    filters:{
        toUppercase( value ){
            return value.toUpperCase();
        }
    }
}
</script>

<style>

</style>
