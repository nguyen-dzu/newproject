import {
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import { dbRealTime } from "../../../contains/config.firebase.js";
import { uuid } from "../../../contains/index.js";

const btnAddProduct = document.querySelector(".btn_add");
const modalForm = document.querySelector(".modal");
const BtncloseModal = document.querySelector(".closeModal");
const formAddProduct = document.querySelector(".form-group");

function closeModal() {
  modalForm.style.display = "none";
}

BtncloseModal.addEventListener("click", closeModal);

const handelAddProduct = () => {
  modalForm.style.display = "block";
  formAddProduct.addEventListener("submit", async (event) => {
    const uid = uuid();
    event.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const description = e.target.description.value;

    set(ref(dbRealTime, "products/" + uid), {
      id: uid,
      nameProduct: name,
      price: price,
      description: description,
    });
  });
};

btnAddProduct.addEventListener("click", handelAddProduct);
