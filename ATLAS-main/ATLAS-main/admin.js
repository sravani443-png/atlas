const firebaseConfig = {
    apiKey: "AIzaSyAtrhpG_hOWxNIFuacOqz4IN1kzJzxsJlI",
    authDomain: "iitismclubs.firebaseapp.com",
    projectId: "iitismclubs",
    storageBucket: "iitismclubs.appspot.com",
    messagingSenderId: "242765089478",
    appId: "1:242765089478:web:a06957583a09551e1965c7"
};
firebase.initializeApp(firebaseConfig);
  

const database = firebase.database()
  

    
const add_event_button = document.getElementById("addevent")
add_event_button.addEventListener('click',()=>
{
    let clubid=document.getElementById("clubid").value
    let event_name=document.getElementById("eventname").value
    let date=document.getElementById("date").value
    let time=document.getElementById("time").value
    let venue=document.getElementById("venue").value
    let formlink=document.getElementById("formlink").value
    database.ref("clubs/"+clubid+"/"+event_name).update({clubid:clubid,name:event_name,date:date,time:time,venue:venue,formlink:formlink})
    const ref = firebase.storage().ref();
    const file = document.querySelector("#photo").files[0];
    const name =  clubid+ "-" + event_name;
    const metadata = {
        contentType: file.type
     };
     const task = ref.child(name).put(file, metadata);task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
    database.ref("clubs/"+clubid+"/"+event_name).update({imglink:url})
    alert('image uploaded successfully');
    document.querySelector("#image").src = url;
 }).catch(console.error);

 const errorMsgElement = document.querySelector('span#errorMsg');
     
    alert("event added!")
    
})    

const auth = firebase.auth()

firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }
  })
  
  
  function logout(){
    firebase.auth().signOut()
  }
    
// function uploadImage() {
//     const ref = firebase.storage().ref();
//     const file = document.querySelector("#photo").files[0];
//     const name =  + "-" + file.name;
//     const metadata = {
//        contentType: file.type
//     };
//     const task = ref.child(name).put(file, metadata);task
//     .then(snapshot => snapshot.ref.getDownloadURL())
//     .then(url => {
//     console.log(url);
//     alert('image uploaded successfully');
//     document.querySelector("#image").src = url;
//  })
//  .catch(console.error);
//  }
//  const errorMsgElement = document.querySelector('span#errorMsg');