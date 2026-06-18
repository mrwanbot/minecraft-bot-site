const PASSWORD = "151525";

/* LOGIN PAGE */
function login() {
  const p = document.getElementById("password").value;

  const saved = localStorage.getItem("savedPass");

  if (p === PASSWORD || p === saved) {
    openDashboard();
  } else {
    alert("كلمة السر خطأ ❌");
  }
}

/* SAVE PASSWORD */
function save() {
  const p = document.getElementById("password").value;

  if (p === PASSWORD) {
    localStorage.setItem("savedPass", p);
    alert("تم الحفظ ✔");
  } else {
    alert("كلمة السر غير صحيحة");
  }
}

/* SWITCH TO PAGE 2 */
function openDashboard() {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}
