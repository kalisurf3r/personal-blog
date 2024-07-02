const userInput = document.getElementById("user");
const titleInput = document.getElementById("title");
const contentInpit = document.getElementById("content");
const submitButton = document.getElementById("submit");

const userObj = [];

function init() {
  const store = JSON.parse(localStorage.getItem("userObj"));
}

function saveData() {
  localStorage.setItem("userObj", JSON.stringify(userObj));
}

function clear() {
  userInput.value = "";
  titleInput.value = "";
  contentInpit.value = "";
  window.location.reload();
}

function handleSubmit(event) {
  event.preventDefault();
  const user = userInput.value;
  const title = titleInput.value;
  const content = contentInpit.value;
  const obj = {
    user,
    title,
    content,
  };
  userObj.push(obj);
  saveData();
  clear();
}

submitButton.addEventListener("click", handleSubmit);
