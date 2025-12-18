var firebaseConfig = {
    apiKey: "AIzaSyAtrhpG_hOWxNIFuacOqz4IN1kzJzxsJlI",
  authDomain: "iitismclubs.firebaseapp.com",
  databaseURL: "https://iitismclubs-default-rtdb.firebaseio.com",
  projectId: "iitismclubs",
  storageBucket: "iitismclubs.appspot.com",
  messagingSenderId: "242765089478",
  appId: "1:242765089478:web:a06957583a09551e1965c7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

