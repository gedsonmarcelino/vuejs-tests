import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDcQJ_zPPze2ZKfgP_6R57DqeA_x0h3Z_Q',
  authDomain: 'vue-http-test-5bfdd.firebaseapp.com',
  databaseURL: 'https://vue-http-test-5bfdd.firebaseio.com',
  projectId: 'vue-http-test-5bfdd',
  storageBucket: 'vue-http-test-5bfdd.appspot.com',
  messagingSenderId: '108626696298'
}
firebase.initializeApp(config)

const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)

export const auth = firebase.auth()
export const db = firestore
export default firebase
