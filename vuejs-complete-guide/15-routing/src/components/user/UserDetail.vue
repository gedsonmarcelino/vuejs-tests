<template>
    <div>
        <h3>Some User Details</h3>
        <hr>
        <p>Loaded ID : {{id}}</p>
        <router-link
            :to="{ name: 'userEdit', params: {id:id}, query: {locale:'en', num:'15'}}" 
            class="btn btn-primary">Edit</router-link>
    </div>
    
</template>

<script>
    export default{
        props:['id']
    }
</script>