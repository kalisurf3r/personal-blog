const userInput = document.getElementById("user");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const submitButton = document.getElementById("submit");
const themeSwitcher = document.getElementById("theme");
const page = document.querySelector("body");

const userObj = [];
let mode = "light";


function init() {
  const store = JSON.parse(localStorage.getItem("userObj"));
//   // Assuming 'store' is your JSON object
// console.log(JSON.stringify(store));
}

function saveData() {
  localStorage.setItem("userObj", JSON.stringify(userObj));
  
}

function clear() {
  userInput.value = "";
  titleInput.value = "";
  contentInput.value = "";
  window.location.reload();
}

function handleSubmit(event) {
  event.preventDefault();
  const user = userInput.value;
  const title = titleInput.value;
  const content = contentInput.value;
  const obj = {
    user,
    title,
    content,
  };
  userObj.push(obj);
  saveData();
  init();
  clear();
  
  window.location.href = "blog.html";
}

submitButton.addEventListener("click", handleSubmit);


themeSwitcher.addEventListener("click",  () => { 
  
  if (mode === "light") {
    mode = "dark";
    page.setAttribute("class", "dark");
} else {
    mode = "light";
    page.setAttribute("class", "light");
}
})

