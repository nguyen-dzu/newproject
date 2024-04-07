// import { role } from "../../../contains.js";

import { dbFireStore } from "../../../contains/config.firebase.js";
import modalHtml from "../../../contains/modal.js";
import {
  collection,
  getDocs,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const modal = document.querySelector(".modal");
const container = document.querySelector(".container");
const table = document.querySelector(".table");

const getUser = async () => {
  const querySnapsot = await getDocs(collection(dbFireStore, "users"));
  querySnapsot.docs.forEach((item, index) => {
    const data = item.data();
    const { name, email, id, status } = data;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${name}</td>
      <td>${email}</td>
      <td>${
        status.active
          ? "<p style='color: green'>active</p>"
          : "<p style='color: red'>unactive</p>"
      }</td>
    `;
    const column = document.createElement("td");
    const btn = document.createElement("button");
    column.appendChild(btn);
    tr.appendChild(column);
    btn.innerText = "Delete";
    btn.addEventListener("click", () => {
      onDelete(id);
    });
    table.appendChild(tr);
  });
};

window.onload = getUser();

function onDelete(id) {
  modal.innerHTML = modalHtml();
  modal.style.display = "block";
  const btn_cancel = document.querySelector(".btn_cancel");
  const btn_confirm = document.querySelector(".btn_confirm");
  container.style = `
    position: relative;
    z-index: 1;
    opacity: 0.5; 
    background-color: #000;
  `;

  const handelHiddentModal = () => {
    modal.style.display = "none";
    container.style = "";
  };

  const handelDeleteUser = async () => {
    const dref = doc(dbFireStore, "users", id);
    modal.style.display = "none";
    container.style = "";
    try {
      await setDoc(
        dref,
        {
          status: {
            active: false,
          },
        },
        { merge: true }
      );
      getUser();
    } catch (error) {
      console.log(error);
    }
  };
  btn_confirm.addEventListener("click", handelDeleteUser);
  btn_cancel.addEventListener("click", handelHiddentModal);
}
// btn_delete.addEventListener("click", onDelete);

// // onAuthStateChanged(auth, async (user) => {
// //   if (user) {
// //     const uid = user.uid;
// //     const docRef = doc(dbFireStore, "users", uid);
// //     const docSnap = await getDoc(docRef);
// //     if (docSnap.exists()) {
// //       const data = docSnap.data();
// //       data.status.role === role.admin
// //         ? (window.location.href = "../../Admin/Dashboard/dashboard.html")
// //         : (window.location.href = "../../Home/home.html");
// //     } else {
// //       // docSnap.data() will be undefined in this case
// //       console.log("No such document!");
// //     }
// //   } else {
// //     // User is signed out
// //     // ...
// //   }
// // });
