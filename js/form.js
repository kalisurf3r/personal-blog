const userInput = document.getElementById("user");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const submitButton = document.getElementById("submit");
const themeSwitcher = document.getElementById("theme");
const page = document.querySelector("body");

//storing user data
const userObj = [];
//default theme
let mode = "light";

//retrieval of data from local storage
function init() {
  const store = JSON.parse(localStorage.getItem("userObj"));
}

//saving data to local storage
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
  
  //creating an object to store user data
  const obj = {
    user,
    title,
    content,
  };
  //push object to userObj array
  userObj.push(obj);
  saveData();
  init();
  clear();
  
  //direct users to blog page
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

