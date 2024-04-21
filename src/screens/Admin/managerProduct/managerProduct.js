import {
  getDatabase,
  set,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import { dbRealTime } from "../../../contains/config.firebase.js";

const btnAddProduct = document.querySelector(".btn_add");
const modalForm = document.querySelector(".modal");
const BtncloseModal = document.querySelector(".closeModal");
const formAddProduct = document.querySelector(".form-group");

function closeModal() {
  modalForm.style.display = "none";
}

BtncloseModal.addEventListener("click", closeModal);

const handelAddProduct = () => {
  // modalForm.style.display = "block";
  // formAddProduct.addEventListener("submit", (e) => {
  //   e.preventDefault();
  const uuid = self.crypto.randomUUID();
  // const db = getDatabase();
  // const name = e.target.name.value;
  // const price = e.target.price.value;
  // const description = e.target.description.value;

  set(ref(dbRealTime, "products/" + uuid), {
    id: uuid,
    nameProduct: "name_7",
    price: 107,
    description: "description_7",
  });

  // });
};

const getListProduct = async () => {
  const data = await get(ref(dbRealTime, "products/"));

  if (data.exists()) {
    console.log(data.val());
    // đẩy data.val() vào 1 mảng
    // render màn hình ==> button thêm vào giỏ hàng ==> push 1 item vào cart = [{item}, {item}] localStorage
    // lenth: 2==> số đơn hàng có trên màn hình
    // price: 1000 ==> tổng tiền: reduce: 1000 + 1000 = 2000
    //
  } else {
    console.log("No data available");
  }
};

getListProduct();
btnAddProduct.addEventListener("click", handelAddProduct);
