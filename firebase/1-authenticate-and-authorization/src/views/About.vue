<template>
  <div class="about">
    <h1>This is an about page</h1>

    {{$store.getters.user.displayName}}
  </div>
</template>
