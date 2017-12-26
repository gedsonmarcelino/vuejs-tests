<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(200)">Decrement</button>
        <button class="btn btn-primary" @click="asyncIncrement({by:50, duration:1500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by:25, duration:600})">Decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement',
                'asyncIncrement',
                'asyncDecrement',
            ])
        }
    }
</script>