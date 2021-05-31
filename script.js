var firebaseConfig = {
  apiKey: "AIzaSyATiPPb7tzHGl6Rnalt_YBTDFl6pYCj4f8",
  authDomain: "resume-952fe.firebaseapp.com",
  projectId: "resume-952fe",
  storageBucket: "resume-952fe.appspot.com",
  messagingSenderId: "238495429896",
  appId: "1:238495429896:web:cc56264a28c6cb6f9ce8bd",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var docRef = db.collection("Projects");
var res = "";
db.collection("Projects")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      res +=
        `<h4 class="text-dark font-weight-bold">` +
        doc.data().Name +
        `</h4>` +
        `<p style="font-size: 1.2vw;"><i class="far fa-square text-primary"></i>` +
        doc.data().Descrption +
        `</p>` +
        `<p style="font-size: 1.2vw;"><i class="far fa-square text-primary"></i>Technology used - ` +
        doc.data().Technologyused +
        `</p>`;
    });
    document.getElementById("prjcts").innerHTML = res;
  });
