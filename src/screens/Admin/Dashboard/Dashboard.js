import { role } from "../../../contains.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    const docRef = doc(dbFireStore, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      data.status.role === role.admin
        ? (window.location.href = "../../Admin/Dashboard/dashboard.html")
        : (window.location.href = "../../Home/home.html");
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  } else {
    // User is signed out
    // ...
  }
});
