const inp = document.querySelector("#inp");
const btns = document.querySelectorAll("#btns button");
const home = document.querySelector("#home");
const app = document.querySelector("#app");
const h1 = document.querySelector('h1')

let password = "1234";

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    let pswd = "";
    pswd += btn.value;
    inp.value += pswd;
    console.log((inp.innerHTML = pswd));
  });
});

btnok.addEventListener("click", function () {
  checkPassword();
});

function checkPassword() {
  const pswd = inp.value;
  console.log(pswd);
  if (password == pswd) {
    app.style.display = "none";
    home.style.display = "block"
    h1.style.display = "none"
  }
  else{
    alert('Wrong pin? Try again!')
    inp.value = ""
  }
}
