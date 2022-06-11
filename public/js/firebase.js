let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyAwlNsbL1STvNYECSWAGEgIcaboFndfdXI",
    authDomain: "anubhav-6f7f5.firebaseapp.com",
    projectId: "anubhav-6f7f5",
    storageBucket: "anubhav-6f7f5.appspot.com",
    messagingSenderId: "876386524805",
    appId: "1:876386524805:web:d60e360d9926aa0ef253ec"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}