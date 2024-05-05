import {
  getDatabase,
  set,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import { dbRealTime } from "../../../contains/config.firebase.js";

// const btnAddProduct = document.querySelector(".btn_add");
const tableContent = document.querySelector(".tableContent");
const handelAddProduct = () => {
  // modalForm.style.display = "block";
  // formAddProduct.addEventListener("submit", (e) => {
  //   e.preventDefault();
  // const uuid = self.crypto.randomUUID();
  // // const db = getDatabase();
  // // const name = e.target.name.value;
  // // const price = e.target.price.value;
  // // const description = e.target.description.value;
  // set(ref(dbRealTime, "products/" + uuid), {
  //   id: uuid,
  //   nameProduct: "name_7",
  //   price: 107,
  //   description: "description_7",
  // });
  // });
};

const getListProduct = async () => {
  const data = await get(ref(dbRealTime, "products/"));

  if (data.exists()) {
    const dataArray = Object.values(data.val());

    const _tableContent = document.createElement("table");
    const tableRows = dataArray
      .map((item, index) => {
        return `
          <tr>
            <td>${item.id}</td>
            <td>${item.nameProduct}</td>
            <td>${item.price}</td>
            <td style="white-space: nowrap; 
            max-width: 50px; 
            overflow: hidden;
            text-overflow: ellipsis; ">${item.description}</td>
            <td><button class="view-detail" data-index="${index}">view detail</button></td>
          </tr>
        `;
      })
      .join("");

    _tableContent.innerHTML = `
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      `;

    tableContent.appendChild(_tableContent);

    // Attach event listeners to each "view detail" button
    document.querySelectorAll(".view-detail").forEach((button) => {
      button.addEventListener("click", () => {
        const index = button.dataset.index;
        get(ref(dbRealTime, "products/" + dataArray[index].id)).then((data) => {
          if (data.exists()) {
            console.log(data.val());
          } else {
            console.log("No data available");
          }
        });
      });
    });
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
// btnAddProduct.addEventListener("click", handelAddProduct);
