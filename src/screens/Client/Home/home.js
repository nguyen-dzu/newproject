import { dbFireStore, auth } from "../../../contains/config.firebase.js";
import {
  collection,
  getDocs,
  getDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
const name_user = document.querySelector(".name_user");
const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "../Auth/Login/login.html";
}
// // Quản user admin
// const getUser = async () => {
//   const querySnapsot = await getDocs(collection(dbFireStore, "users"));
//   querySnapsot.docs.forEach((item, index) => {
//     const data = item.data();
//     console.log(data, "data<<<");
//     const { name, email, id } = data;
//     const table = document.querySelector(".table");
//     const tr = document.createElement("tr");
//     tr.innerHTML = `
//       <td>${index + 1}</td>
//       <td>${name}</td>
//       <td>${email}</td>
//       <td>${id}</td>
//     `;
//     table.appendChild(tr);

//     console.log(data);
//   });
// };

const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "../Auth/Login/login.html";
};

logout();

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    const docRef = doc(dbFireStore, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      name_user.innerText = data.name;
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  } else {
    // User is signed out
    // ...
  }
});

// getUser();
