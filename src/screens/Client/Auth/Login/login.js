import { auth, dbFireStore } from "../../../../contains/config.firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const formLogin = document.querySelector(".form_login");

const loginUser = async (e) => {
  e.preventDefault();
  const { target } = e;
  const email = target.email.value;
  const password = target.password.value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    localStorage.setItem("token", user.accessToken);
    if (user.accessToken) {
      window.location.href = "../../Home/home.html";
    }
  } catch (error) {
    alert("Login failed");
  }
};

formLogin.addEventListener("submit", async (e) => await loginUser(e));
