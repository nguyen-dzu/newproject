import {
  app,
  auth,
  dbFireStore,
} from "../../../../contains/config.firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import {
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// querySelector: dùng để lấy element trong html ~~ document.getElementById
const form = document.querySelector(".form_login");
async function registerUser(e) {
  e.preventDefault();
  const { target } = e;
  const email = target.email.value;
  const password = target.password.value;
  const name = target.name.value;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    if (user) {
      target.email.value = "";
      target.password.value = "";
      target.name.value = "";
    }
    try {
      await setDoc(doc(dbFireStore, "users", user.uid), {
        email,
        name,
        id: user.uid,
      });
    } catch (error) {
      alert(error.message);
    }
  } catch (error) {
    alert(error.message);
  }
}

form.addEventListener("submit", async (e) => {
  await registerUser(e);
});
