// email: sample@gmail.com
// password: 1111

const accounts = [
  { login: "user1", email: "sample@gmail.com", password: "1111" },
];

//Password check
function checkLogin() {
  const loginInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  // Verify accound data
  const foundAccount = accounts.find((account) => {
    console.log("login:", loginInput, "password:", passwordInput);
    return (
      (account.login === loginInput || account.email === loginInput) &&
      account.password === passwordInput
    );
  });

  if (foundAccount) {
    alert("Zalogowano pomyślnie!");
    // Wrong accounf data
  } else {
    alert("Błąd logowania. Sprawdź login lub hasło.");
  }
}
