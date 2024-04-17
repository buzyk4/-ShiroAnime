// email: sample@gmail.com
// password: 1111

let usersLogs = [
  {
    nickname: "Test",
    email: "sample@gmail.com",
    password: "1111",
  },
];

//Email check
const email = document.querySelector(".email-req");
const emailValue = email.value;

//Password check
const password = document.querySelector(".password-req");
const passwordValue = password.value;

const LoginBtn = document.getElementById("loginBtnHelp");

LoginBtn.addEventListener("click", function (email) {
  // Find the user in the database
  let user = usersLogs.find((user) => user === email);
  console.log(user);
  // Return the user
  return user;
});
