import get from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";

const URL = "https://randomuser.me/api/";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btn = get(".btn");
const btns = [...document.querySelectorAll(".icon")];

const showUser = async () => {
  const person = await getUser();
  console.log(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
