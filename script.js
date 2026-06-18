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
