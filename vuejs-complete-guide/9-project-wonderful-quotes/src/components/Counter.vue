<template>
    <div class="row">
        <div class="col-md-12">
            <h2>Qutes Added</h2>
            <div class="progress">
                <div class="progress-bar" role="progressbar" :style="{width: calculateSize()+'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    {{amount}}/{{limit}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:['amount','limit'],
        methods:{
            calculateSize(){
                return this.limit*this.amount;
            }
        }
    }
</script>

<style scoped>

</style>
