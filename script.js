// Firebase config (ضع كودك هنا)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// LOGIN
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then(result => {
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("dashboard").classList.remove("hidden");

      document.getElementById("user").innerText =
        result.user.displayName;
    })
    .catch(err => alert(err.message));
}

// BOT (شكلي)
function startBot() {
  alert("Bot Started 🟢");
}

function stopBot() {
  alert("Bot Stopped 🔴");
}
