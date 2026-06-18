// Firebase config
const firebaseConfig = {
apiKey: "AIzaSyDngvbbt_cfql7fyQkAeqmJ9qrxyKxqApo",
  authDomain: "minecraft-panel-7fdfe-52128.firebaseapp.com",
  projectId: "minecraft-panel-7fdfe-52128",
  storageBucket: "minecraft-panel-7fdfe-52128.firebasestorage.app",
  messagingSenderId: "621779806797",
  appId: "1:621779806797:web:413324c0a0cc6891b24a04"
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
    .catch(error => alert(error.message));
}

// BOT (شكلي)
function startBot() {
  alert("Bot Started 🟢");
}

function stopBot() {
  alert("Bot Stopped 🔴");
