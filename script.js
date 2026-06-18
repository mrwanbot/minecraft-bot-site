function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let error = document.getElementById("error");

  // بيانات تسجيل دخول (تجريبية فقط)
  if(user === "admin" && pass === "1234") {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("panel").classList.remove("hidden");
  } else {
    error.innerHTML = "❌ Wrong username or password";
  }
}

// Bot functions
let statusText = document.getElementById("status");

function startBot() {
  statusText.innerHTML = "Online 🟢";
  statusText.style.color = "lime";
}

function stopBot() {
  statusText.innerHTML = "Offline 🔴";
  statusText.style.color = "red";
}

function sendCommand() {
  let cmd = document.getElementById("command").value;
  if(cmd === "") {
    alert("اكتب أمر أولاً!");
  } else {
    alert("Command sent: " + cmd);
    document.getElementById("command").value = "";
  }
}
