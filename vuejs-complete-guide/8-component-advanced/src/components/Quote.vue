<template>
  <div>
      <div>
        <slot name="title"></slot>
      </div>
      <hr>
      <div>
        <slot></slot>
      </div>
  </div>
</template>

<script>
    export default{
        props:['quote']
    }
</script>

<style scoped>
div{
    border: 1px solid gray;
    box-shadow: 1px 1px 2px black ;
    text-align:center;
    padding: 30px;
    margin: 30px auto;
}

h2{
    color: red;
}
</style>
