<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <keep-alive>
                    <component :is="selectedComponent"></component>                
                </keep-alive>
                <!-- <app-quote>
                    <h2 slot="title">{{title}}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis veritatis quas cum vitae, ut non quae unde repudiandae accusamus id et in aperiam optio facilis debitis modi adipisci excepturi reiciendis!</p>
                </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data:()=>{
            return{
                title:'Just a Test Title',
                selectedComponent: 'appQuote'
            }
        },
        components:{
            appQuote: Quote,
            appAuthor: Author,
            appNew: New            
        }    
    }
</script>

<style>
</style>
