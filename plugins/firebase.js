import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyBIGe21CqIeDkmivooVvyO8X9mRlMVXkPg",
      authDomain: "drunk-app-0713.firebaseapp.com",
      databaseURL: "https://drunk-app-0713-default-rtdb.firebaseio.com",
      projectId: "drunk-app-0713",
      storageBucket: "drunk-app-0713.appspot.com",
      messagingSenderId: "390672608056",
      appId: "1:390672608056:web:1bd413d3c732f48c0fafcd",
      measurementId: "G-LP93LC2J5Q"
    }
  )
}

export default firebase
