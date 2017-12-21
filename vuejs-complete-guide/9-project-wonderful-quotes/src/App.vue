<template>
    <div class="container">
        <app-counter :amount="amountQuotes" :limit="maxQuotes"></app-counter>
        <app-quote :disabled="!canAdd()" @wasAddedQuote="onAddQuote($event)"></app-quote>
        <app-quote-grid :quotes="quotes" @wasDeletedQuote="onDeleteQuote($event)"></app-quote-grid>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Quote from './components/Quote.vue';
    import QuoteGrid from './components/QuoteGrid.vue';

    export default {
        components:{
            appCounter: Counter,
            appQuote: Quote,
            appQuoteGrid: QuoteGrid,
        },
        data: ()=>{
            return {
                quotes: ['My first quote'],
                maxQuotes: 10
            }
        },
        computed:{
            amountQuotes:function(){
                return this.quotes.length;
            }
        },
        methods: {
            onAddQuote( value ){
                if ( !this.canAdd() ){
                    alert("Sorry, you can't add more quotes!");
                } else {
                    this.quotes.push( value );
                }
            },
            onDeleteQuote( index ){
                this.quotes.splice(index,1);
            },
            canAdd(){
                return ( this.amountQuotes < this.maxQuotes );
            }
        }
    }
</script>

<style>
</style>
