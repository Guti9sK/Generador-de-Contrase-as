document
  .getElementById("generar-btn")
  .addEventListener("click", generarPassword);

function generarPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 12;
  let password = "";

  for (var i = 0, n = chars.length; i < passwordLength; ++i) {
    password += chars.charAt(Math.floor(Math.random() * n));
  };

  document.getElementById("password-display").value = password;
};
