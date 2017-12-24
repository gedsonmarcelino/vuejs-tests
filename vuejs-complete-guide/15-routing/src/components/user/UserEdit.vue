<template>
<div>

    <h3>Edit the User</h3>
    <hr>
    <div class="form-group">
        <label for="">ID</label>
        <input type="text" class="form-control" v-model="id">
    </div>
    <hr>
    <p>Queries:</p>
    <ul>
        <li>Locale: {{ $route.query.locale }}</li>
        <li>Analytics: {{ $route.query.num }}</li>
    </ul>

</div>
</template>

<script>
    export default{
        props:['id']
    }
</script>