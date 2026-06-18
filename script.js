// 🔐 كلمة السر
const PASSWORD = "151525";

/* LOGIN */
function login() {
  const pass = document.getElementById("password").value;

  const saved = localStorage.getItem("savedPass");

  if (pass === PASSWORD || pass === saved) {
    openDashboard();
  } else {
    alert("كلمة السر خطأ ❌");
  }
}

/* SAVE PASSWORD */
function savePassword() {
  const pass = document.getElementById("password").value;

  if (pass === PASSWORD) {
    localStorage.setItem("savedPass", pass);
    alert("تم الحفظ ✔");
  } else {
    alert("لا يمكن حفظ كلمة خاطئة");
  }
}

/* OPEN DASHBOARD */
function openDashboard() {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}
