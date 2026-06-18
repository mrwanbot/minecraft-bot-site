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

let currentUser = null;

/* LOGIN */
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then(result => {
      currentUser = result.user;

      // إذا محفوظ يدخل مباشرة
      if (localStorage.getItem("savedUser") === currentUser.uid) {
        openDashboard(currentUser);
      } else {
        alert("سجّلت دخول، الآن اضغط حفظ للدخول الدائم");
      }
    })
    .catch(err => alert(err.message));
}

/* SAVE LOGIN */
function saveLogin() {
  if (!currentUser) {
    alert("سجّل دخول أولاً");
    return;
  }

  localStorage.setItem("savedUser", currentUser.uid);

  alert("تم الحفظ ✔ الآن الدخول سيكون تلقائي");

  openDashboard(currentUser);
}

/* AUTO LOGIN */
window.onload = function () {
  const saved = localStorage.getItem("savedUser");

  if (saved) {
    auth.onAuthStateChanged(user => {
      if (user && user.uid === saved) {
        openDashboard(user);
      }
    });
  }
};

/* OPEN DASHBOARD */
function openDashboard(user) {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}
