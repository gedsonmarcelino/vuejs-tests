<template>
  <div class="hello">
    <h1>Authentication</h1>

    <p>
      {{$store.getters.user}}
    </p>

    <button @click="onLogin">GOOGLE</button>
  </div>
</template>

<script>
import firebase, {auth, db} from '../firebase.js'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    onLogin () {
      const provider = new firebase.auth.GoogleAuthProvider()
      const vm = this
      auth.signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken
        // The signed-in user info.
        var user = result.user

        vm.saveUser(user)

        vm.$store.dispatch('initConfig', {token, user})
        vm.$router.push('/about')
      }).catch(function (error) {
      // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential

        console.log('ERROR', errorCode, errorMessage, email, credential)
      })
    },

    saveUser (user) {
      console.log(user.uid, user)
      db.collection('users').doc('111').set({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid
      })
        .then(() => alert('Saved with success!'))
        .catch(error => console.log('error', error))
    }
  }
}
</script>
