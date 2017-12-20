import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeName( age ){
      this.$emit('wasAgeEdited', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
